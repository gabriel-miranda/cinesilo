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
    height: '60px',
    background: GLOBALS.COLORS.BLACK,
    font: {
      color: GLOBALS.COLORS.WHITE,
    },
    title: {
      margin: `0 0 9px ${GLOBALS.SIZES.PADDING.MAIN}`,
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
};

export default theme;
