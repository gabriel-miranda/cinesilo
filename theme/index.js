import * as GLOBALS from './global';

const theme = {
  truncate: `
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
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
    position: 'absolute',
    top: GLOBALS.SIZES.HEADER,
    width: '100%',
    minheight: '100vh',
    padding: `0 ${GLOBALS.SIZES.PADDING.MAIN}`,
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
};

export default theme;
