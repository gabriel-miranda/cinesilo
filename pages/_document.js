import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from 'theme/global';
import { APP_NAME } from 'config';

const Styles = () => (
  <>
    <GlobalStyle />
    <Normalize />
  </>
);

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    const { language, translations } = ctx.res.locals;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            sheet.collectStyles(
              <>
                <Styles />
                <App {...props} />
              </>,
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
        language,
        translations,
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const { language, translations } = this.props;

    return (
      <Html lang={language}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon-180x180.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=5"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            href="/static/visby.woff2"
          />
          <link rel="stylesheet" href="/static/font.css" type="text/css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
              window.${APP_NAME} = {
                translations: ${JSON.stringify(translations)},
                language: ${JSON.stringify(language)},
              }`,
            }}
          />
        </body>
      </Html>
    );
  }
}
