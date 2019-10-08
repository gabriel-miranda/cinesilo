const PORT = parseInt(process.env.PORT, 10) || 3000;

module.exports = {
  APP_NAME: process.env.APP_NAME || 'cinesilo',
  PORT,
  BASE_URL: process.env.BASE_URL || `http://localhost:${PORT}`,
  DEV: Boolean(process.env.DEV) || process.env.NODE_ENV !== 'production',
  PAGE_SIZE: parseInt(process.env.PAGE_SIZE, 10) || 10,
  CATEGORIES: { movies: 'movies', series: 'series', anime: 'anime' },
  FACEBOOK_URL: 'https://www.facebook.com/cinesilo/',
  FACEBOOK_SHARE: 'https://www.facebook.com/sharer/sharer.php?u=',
  TWITTER_SHARE: 'http://twitter.com/share?hashtags=cinesilo&url=',
  TWITTER_URL: 'https://twitter.com/cinesilo',
  INSTAGRAM_URL: 'https://www.instagram.com/cinesilo/',
};
