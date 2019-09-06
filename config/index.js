const PORT = parseInt(process.env.PORT, 10) || 3000;

module.exports = {
  APP_NAME: process.env.APP_NAME || 'cinesilo',
  PORT,
  BASE_URL: process.env.BASE_URL || `http://localhost:${PORT}`,
  DEV: Boolean(process.env.DEV) || process.env.NODE_ENV !== 'production',
  PAGE_SIZE: parseInt(process.env.PAGE_SIZE, 10) || 10,
  CATEGORIES: { movies: 'movies', series: 'series', anime: 'anime' },
};
