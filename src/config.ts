/**
 * Simplifies access to configuration file.
 * To use: import config from 'config';
 */

import getConfig from 'next/config';
import selectn from 'selectn';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
const config = {
  server: serverRuntimeConfig,
  ...publicRuntimeConfig,
};

export default {
  ...config,
  get: (nestedConfigKey: string) => selectn(nestedConfigKey, config),
};
