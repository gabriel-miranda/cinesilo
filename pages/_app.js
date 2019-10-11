import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import { APP_NAME } from 'config';
import { log } from 'modules/logger';
import Client from 'modules/client/main';
import TranslationsContext from 'modules/translations/context';
import ActiveSectionContext from 'modules/activesection/context';
import Header from 'components/Header';
import Footer from 'components/Footer';

let RANDOM_POST = typeof window !== 'undefined' ? window.RANDOM_POST : null;
const DEFAULT_CATEGORY = 'home';

async function getRandomPost(api) {
  if (RANDOM_POST) {
    return RANDOM_POST;
  }
  const amount = 5;
  const {
    data: {
      posts: { items },
    },
  } = await api.get(`
      {
        posts(limit: ${amount}, skip: 4) {
          items {
            title
            slug
          }
        }
      }
    `);
  return items[Math.floor(Math.random() * amount)];
}

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
    let random = null;
    let category = DEFAULT_CATEGORY;
    if (typeof App.getInitialProps === 'function') {
      [appProps, random] = await Promise.all([
        App.getInitialProps.call(App, appContext),
        getRandomPost(api),
      ]);
      category = getCategory(appProps);
    }

    return {
      ...appProps,
      translations,
      language,
      category,
      random,
    };
  }

  state = {
    section: 'home',
  };

  componentDidMount() {
    const { random } = this.props;
    RANDOM_POST = random;
  }

  componentDidCatch(error, errorInfo) {
    log.error(`_app.js:error 💥 ${error}`, errorInfo);
    super.componentDidCatch(error, errorInfo);
  }

  translate = key => {
    const { translations } = this.props;
    try {
      return translations[key];
    } catch (e) {
      return key;
    }
  };

  setSection = section => this.setState({ section });

  render() {
    const { Component, pageProps, language, category, random } = this.props;
    return (
      <ActiveSectionContext.Provider value={category}>
        <TranslationsContext.Provider value={{ t: this.translate, language }}>
          <ThemeProvider theme={theme}>
            <>
              <Header post={random} />
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
