/**
 * Next-sass config file: https://github.com/zeit/next-plugins/tree/master/packages/next-sass
 */

const withSass = require('@zeit/next-sass');

const resourcesLoader = {
  loader: 'sass-resources-loader',
  options: {
    resources: [
      './styles/_import.scss',
    ],
  },
};
module.exports = withSass({
  webpack: (config /* , options */) => {
    config.module.rules.map(rule => {
      if (
        rule.test.source.includes('scss') ||
        rule.test.source.includes('sass')
      ) {
        rule.use.push(resourcesLoader);
      }
      return rule;
    });
    return config;
  },
});
