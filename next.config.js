/**
 * Next config file
 */
// it is server side file, so console.log here is fine and needed
/* eslint-disable no-console */

const withSass = require('@zeit/next-sass');
const path = require('path');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const selectn = require('selectn');
const configDev = require('./config/config.dev');
const configProd = require('./config/config.prod');

// Construct any needed global configuration for all environments
const globalConfigForAllEnvs = (envConfig = {}) => {
  // Load translations
  const defaultLanguage = selectn('publicRuntimeConfig.language.default', envConfig) || 'ee';
  const languageList = selectn('publicRuntimeConfig.language.list', envConfig) || [defaultLanguage];
  const translations = languageList.reduce((languageMap, languageCode) => {
    languageMap[languageCode] = {};
    try {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      languageMap[languageCode] = require(`./src/translations/translations.${languageCode}.json`);
    } catch (err) {
      console.warn(`Loading "${languageCode}" translation failed:`, err.message);
    }
    return languageMap;
  }, {});

  return {
    translations,
  };
};

// Next.js configuration export
module.exports = (phase) => withSass({
  webpack: (config /* , options */) => {
    // Import scss files
    config.module.rules.push(
      {
        test: /\.(scss|sass)/,
        use: [
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, './src/styles/_import.scss'),
              ],
            },
          },
        ],
      },
    );

    // Add absolute import possibility for following directories
    [
      'containers',
      'components',
      'pages',
      'utils',
      'styles',
      'config',
      'translations',
    ].forEach(dir => {
      config.resolve.alias[dir] = path.join(__dirname, 'src', dir);
    });

    // Import extensions that do need to be specified
    config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx');
    return config;
  },

  ...(() => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
      // development only config options here
      return {
        serverRuntimeConfig: configDev.serverRuntimeConfig,
        publicRuntimeConfig: {
          ...globalConfigForAllEnvs(configDev),
          ...configDev.publicRuntimeConfig,
        },
      };
    }

    // config options for all phases except development here
    return {
      serverRuntimeConfig: configProd.serverRuntimeConfig,
      publicRuntimeConfig: {
        ...globalConfigForAllEnvs(configProd),
        ...configProd.publicRuntimeConfig,
      },
    };
  })(),
});
