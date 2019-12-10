/**
 * Next config file
 */

const withSass = require('@zeit/next-sass');

module.exports = withSass({
  webpack: (config /* , options */) => {
    config.module.rules.push(
      {
        test: /\.(scss|sass)/,
        use: [
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './styles/_import.scss',
              ],
            },
          },
        ],
      },
    );
    return config;
  },
});
