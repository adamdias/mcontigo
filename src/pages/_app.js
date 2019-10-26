import React from 'react';
import App from 'next/app';
import GlobalStyle from '~/components/styles/globalStyles';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
