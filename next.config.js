/**
 * Next config file
 */

const withSass = require('@zeit/next-sass');
const path = require('path');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const configDev = require('./config/config.dev');
const configProd = require('./config/config.prod');

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
      'pages',
      'utils',
      'styles',
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
      return configDev;
    }

    // config options for all phases except development here
    return configProd;
  })(),
});
