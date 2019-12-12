/**
 * Development environment configuration
 * @type {{serverRuntimeConfig: {}, publicRuntimeConfig: {}}}
 */
module.exports = {
  // Config that is available on the server side only
  serverRuntimeConfig: {

  },

  // Config that is available on both server and client
  publicRuntimeConfig: {
    env: 'dev',
    api: {
      url: 'http://localhost:5000',
    },
    language: {
      default: 'ee',
      list: ['ee'],
    },
  },
};
