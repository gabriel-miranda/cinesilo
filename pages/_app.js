import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import { APP_NAME } from 'config';
import Client from 'modules/client/main';
import TranslationsContext from 'modules/translations/context';
import ActiveSectionContext from 'modules/activesection/context';
import Header from 'components/Header';
import Footer from 'components/Footer';

const DEFAULT_CATEGORY = 'home';

function getCategory({ pageProps }) {
  if (pageProps.category) {
    return pageProps.category;
  }
  if (pageProps.data && pageProps.data.post) {
    return pageProps.data.post.category || DEFAULT_CATEGORY;
  }
  return DEFAULT_CATEGORY;
}

class MyApp extends App {
  static async getInitialProps(appContext) {
    const { req, res } = appContext.ctx;
    const api = new Client(req);
    appContext.ctx.api = api;
    const { translations, language } = req ? res.locals : window[APP_NAME];

    let appProps = {};
    let category = DEFAULT_CATEGORY;
    if (typeof App.getInitialProps === 'function') {
      appProps = await App.getInitialProps.call(App, appContext);
      category = getCategory(appProps);
    }

    return {
      ...appProps,
      translations,
      language,
      category,
    };
  }

  state = {
    section: 'home',
  };

  componentDidCatch(error, errorInfo) {
    super.componentDidCatch(error, errorInfo);
  }

  translate = key => {
    const { translations } = this.props;
    return translations[key];
  };

  setSection = section => this.setState({ section });

  render() {
    const { Component, pageProps, language, category } = this.props;
    return (
      <ActiveSectionContext.Provider value={category}>
        <TranslationsContext.Provider value={{ t: this.translate, language }}>
          <ThemeProvider theme={theme}>
            <>
              <Header />
              <Component {...pageProps} />
              <Footer />
            </>
          </ThemeProvider>
        </TranslationsContext.Provider>
      </ActiveSectionContext.Provider>
    );
  }
}

export default MyApp;
