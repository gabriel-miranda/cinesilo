import { createGlobalStyle } from 'styled-components';

const COLORS = {
  BLACK: '#000',
  WHITE: '#fff',
  WHITE_OPACITY: 'rgba(255, 255, 255, 0.4)',
  PURPLE_MOVIE: '#673AB7',
  PURPLE_MOVIE_OPACITY: 'rgba(103, 58, 183, 0.7)',
  BLUE_SERIES: '#0063DA',
  BLUE_SERIES_OPACITY: 'rgba(0, 99, 218, 0.7)',
  GREEN_ANIME: '#00B397',
  GREEN_ANIME_OPACITY: 'rgba(0, 179, 151, 0.7)',
};

const SIZES = {
  SCREEN: {
    DESKTOP: '1250px',
    TABLET: '960px',
    MOBILE: '768px',
  },
  SUBHEADER: '35px',
  HEADER: '60px',
  PADDING: {
    MAIN: '20px',
  },
  SEARCH: {
    HEIGHT: '40px',
    PADDING: '1em',
  },
};

const FONTS = {
  CINESILO: 'cinesilo',
  COMMON: 'Helvetica, Arial, sans-serif',
};

const RADIUS = {
  LG: '250px',
  MD: '10px',
  SM: '5px',
};

const ZINDEX = {
  HEADER: 200,
  DRAWER: 100,
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
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  img {
    max-width: 100%;
  }
  *:focus {
    outline: none;
  }
  ::placeholder {
    opacity: 0.5;
  }
`;

export { COLORS, FONTS, SIZES, RADIUS, ZINDEX };
