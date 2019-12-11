/**
 * All API routes are in this file.
 */

import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const apiUrl = publicRuntimeConfig.api && publicRuntimeConfig.api.url;

export default {
  USER: {
    GET: (id) => `${apiUrl}/user/${id}`,
    POST: (id) => `${apiUrl}/user/${id}`,
  },
};
