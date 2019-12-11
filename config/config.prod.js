/**
 * Production environment configuration
 * @type {{serverRuntimeConfig: {}, publicRuntimeConfig: {}}}
 */
module.exports = {
  // Config that is available on the server side only
  serverRuntimeConfig: {

  },

  // Config that is available on both server and client
  publicRuntimeConfig: {
    env: 'prod',
  },
};
