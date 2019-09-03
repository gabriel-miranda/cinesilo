import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    font-family: 'Helvetica', 'Arial', sans-serif;
    color: #000;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'cinesilo', sans-serif;
  }
`;

const COLORS = {
  PURPLE_MOVIE: '#673AB7',
  BLUE_SERIES: '#007FE4',
  GREEN_ANIME: '#00B397',
};

export { COLORS };
