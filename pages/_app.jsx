/**
 * Extends and overwrites next.js app file.
 * Good for handling something globally.
 */

import React from 'react';
import App from 'next/app';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
