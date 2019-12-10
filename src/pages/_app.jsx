/**
 * Extends and overwrites next.js app file.
 * Good for handling something globally.
 */

import React from 'react';
import App from 'next/app';

export default class MyApp extends App {
  render () {
    const { Component, pageProps, router: { asPath } } = this.props;

    // Next.js currently does not allow trailing slash in route.
    // This is a client side redirect in case trailing slash occurs.
    if (asPath.length > 1 && asPath.endsWith('/')) {
      const urlWithoutEndingSlash = asPath.replace(/\/*$/gim, '');

      if (typeof window !== 'undefined') {
        window.location.replace(urlWithoutEndingSlash);
      }
      return null;
    }

    return <Component {...pageProps} />;
  }
}
