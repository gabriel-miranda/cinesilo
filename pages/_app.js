import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import { APP_NAME } from 'config';
import Client from 'modules/client/main';
import TranslationsContext from 'modules/translations/context';

class MyApp extends App {
  static async getInitialProps(appContext) {
    const { req, res } = appContext.ctx;
    const api = new Client(req);
    appContext.ctx.api = api;
    const { translations, language } = req ? res.locals : window[APP_NAME];

    let appProps = {};
    if (typeof App.getInitialProps === 'function') {
      appProps = await App.getInitialProps.call(App, appContext);
    }

    return {
      ...appProps,
      translations,
      language,
    };
  }

  componentDidCatch(error, errorInfo) {
    super.componentDidCatch(error, errorInfo);
  }

  translate = key => {
    const { translations } = this.props;
    return translations[key];
  };

  render() {
    const { Component, pageProps, language } = this.props;
    return (
      <TranslationsContext.Provider value={{ t: this.translate, language }}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </TranslationsContext.Provider>
    );
  }
}

export default MyApp;
