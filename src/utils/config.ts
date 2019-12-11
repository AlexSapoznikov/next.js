/**
 * Simplifies access to configuration file.
 * To use: import config from 'utils/config';
 */

import getConfig from 'next/config';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
export default {
  server: serverRuntimeConfig,
  ...publicRuntimeConfig,
};
