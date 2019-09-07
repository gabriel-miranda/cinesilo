import { css } from 'styled-components';
import * as GLOBALS from './global';

const SCREEN_SIZES = {
  mobile: `min-width: ${GLOBALS.SIZES.SCREEN.MOBILE}`,
  tablet: `min-width: ${GLOBALS.SIZES.SCREEN.TABLET}`,
  desktop: `min-width: ${GLOBALS.SIZES.SCREEN.DESKTOP}`,
};

/* eslint-disable-next-line import/prefer-default-export */
export const media = Object.keys(SCREEN_SIZES).reduce((accumulator, label) => {
  const query = SCREEN_SIZES[label];
  accumulator[label] = (...args) => css`
    @media screen and (${query}) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

const theme = {
  truncate: (lines = 1) => `
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${lines};
  `,
  subheader: {
    height: GLOBALS.SIZES.SUBHEADER,
    background: GLOBALS.COLORS.PURPLE_MOVIE,
    font: {
      color: GLOBALS.COLORS.WHITE,
      family: GLOBALS.FONTS.COMMON,
      weight: 400,
      margin: '0 1em 0 0',
      size: '12px',
    },
    icon: {
      background: GLOBALS.COLORS.WHITE,
      fill: GLOBALS.COLORS.PURPLE_MOVIE,
    },
  },
  header: {
    position: 'sticky',
    top: 0,
    height: GLOBALS.SIZES.HEADER,
    background: GLOBALS.COLORS.BLACK,
    zindex: GLOBALS.ZINDEX.HEADER,
    font: {
      color: GLOBALS.COLORS.WHITE,
    },
    title: {
      margin: `0 0 7px ${GLOBALS.SIZES.PADDING.MAIN}`,
      font: {
        size: '30px',
        family: GLOBALS.FONTS.CINESILO,
      },
    },
  },
  container: {
    width: '1250px',
    padding: `0 ${GLOBALS.SIZES.PADDING.MAIN}`,
  },
  drawer: {
    background: GLOBALS.COLORS.BLACK,
    zindex: GLOBALS.ZINDEX.DRAWER,
    position: 'absolute',
    top: 0,
    width: '100%',
    minheight: '100vh',
    padding: `${GLOBALS.SIZES.HEADER} ${GLOBALS.SIZES.PADDING.MAIN} 0`,
    form: {
      position: 'relative',
      padding: '25px 0',
      bordertop: `1px solid ${GLOBALS.COLORS.WHITE_OPACITY}`,
    },
    item: {
      color: GLOBALS.COLORS.WHITE,
      fontfamily: GLOBALS.FONTS.CINESILO,
      padding: '1em 1.5em',
      background: GLOBALS.COLORS.PURPLE_MOVIE_OPACITY,
      display: 'inline-block',
      width: '100%',
      margin: '0 0 1em 0',
      borderradius: GLOBALS.RADIUS.SM,
    },
  },
  search: {
    width: '100%',
    border: 0,
    borderradius: GLOBALS.RADIUS.LG,
    lineheight: GLOBALS.SIZES.SEARCH.HEIGHT,
    padding: `0 ${GLOBALS.SIZES.SEARCH.PADDING}`,
    button: {
      fill: GLOBALS.COLORS.PURPLE_MOVIE,
      background: 'transparent',
      position: 'absolute',
      display: 'flex',
      margin: 'auto',
      height: GLOBALS.SIZES.SEARCH.HEIGHT,
      padding: 0,
      top: 0,
      bottom: 0,
      border: 0,
      right: GLOBALS.SIZES.SEARCH.PADDING,
    },
  },
  thumbnail: {
    icon: {
      movies: GLOBALS.COLORS.PURPLE_MOVIE_OPACITY,
      series: GLOBALS.COLORS.BLUE_SERIES_OPACITY,
      anime: GLOBALS.COLORS.GREEN_ANIME_OPACITY,
    },
    background: {
      movies: GLOBALS.COLORS.PURPLE_MOVIE,
      series: GLOBALS.COLORS.BLUE_SERIES,
      anime: GLOBALS.COLORS.GREEN_ANIME,
    },
  },
  media,
};

export default theme;
