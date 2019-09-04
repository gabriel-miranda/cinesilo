import { createGlobalStyle } from 'styled-components';

const COLORS = {
  BLACK: '#000',
  WHITE: '#fff',
  PURPLE_MOVIE: '#673AB7',
  BLUE_SERIES: '#007FE4',
  GREEN_ANIME: '#00B397',
};

const SIZES = {
  SUBHEADER: '35px',
  PADDING: {
    MAIN: '20px',
  },
};

const FONTS = {
  CINESILO: 'cinesilo',
  COMMON: 'Helvetica, Arial, sans-serif',
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body {
  font-family: ${FONTS.COMMON};
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${FONTS.CINESILO}, sans-serif;
  }
`;

export { COLORS, FONTS, SIZES };
