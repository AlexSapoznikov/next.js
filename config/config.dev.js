/**
 * Development environment configuration
 * To use in code:
 *    import getConfig from 'next/config'
 *    const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
 * @type {{serverRuntimeConfig: {}, publicRuntimeConfig: {}}}
 */
module.exports = {
  // Config that is available on the server side only
  serverRuntimeConfig: {

  },

  // Config that is available on both server and client
  publicRuntimeConfig: {
    env: 'dev',
  },
};
