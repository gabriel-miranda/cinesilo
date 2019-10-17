const _sm = require('sitemap');
const express = require('express');
const { log } = require('../../modules/logger');
const { BASE_URL } = require('../../config/server');

const ONE_DAY = 1 * 1000 * 60 * 60 * 24;
let sm;

const MAIN_ROUTES = ['/', '/cine', '/series', '/anime', '/tags'];

const sitemap = express.Router();

sitemap.get('/sitemap.xml', async (req, res) => {
  if (sm && sm.isCacheValid()) {
    log.info('sitemap:info: sitemap found ✅');
    try {
      const xml = sm.toXML();
      res.header('Content-Type', 'application/xml');
      res.send(xml);
    } catch (e) {
      log.error('sitemap:error 💥', e);
      res.sendStatus(500);
    }
    return;
  }
  sm = _sm.createSitemap({
    hostname: BASE_URL,
    cacheTime: ONE_DAY,
  });
  log.info('sitemap:info: sitemap not found generating 🚀');
  try {
    const { contentful } = res.locals;
    const postsQuery = {
      content_type: 'post',
      select: 'fields.slug',
    };
    const tagsQuery = {
      content_type: 'tag',
    };
    const [posts, tags] = await Promise.all([
      contentful.get(postsQuery),
      contentful.get(tagsQuery),
    ]);

    MAIN_ROUTES.forEach(route => {
      sm.add({
        url: route,
        changefreq: 'daily',
        priority: 1,
      });
    });

    posts.items.forEach(post => {
      sm.add({
        url: `/${post.slug}`,
        changefreq: 'daily',
        priority: 0.9,
      });
    });

    tags.items.forEach(tag => {
      sm.add({
        url: `/tags/${tag.name.replace(' ', '-')}`,
        changefreq: 'daily',
        priority: 0.8,
      });
    });

    const xml = sm.toXML();
    res.header('Content-Type', 'application/xml');
    res.send(xml);
  } catch (e) {
    log.error('sitemap:error 💥', e);
    res.sendStatus(500);
  }
});

module.exports = { sitemap };
