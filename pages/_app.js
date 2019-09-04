import React from 'react';
import App from 'next/app';
import Client from 'modules/client/main';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';

class MyApp extends App {
  static async getInitialProps(appContext) {
    const api = new Client(appContext.ctx.req);
    appContext.ctx.api = api;

    let appProps = {};
    if (typeof App.getInitialProps === 'function') {
      appProps = await App.getInitialProps.call(App, appContext);
    }

    return appProps;
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
