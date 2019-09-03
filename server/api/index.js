const express = require('express');
const graphqlHTTP = require('express-graphql');
const { log } = require('../../modules/logger');
const { DEV } = require('../../config/server');
const { schema } = require('../graphql/schema');
const { resolvers } = require('../graphql/resolvers');
const { ServerError } = require('../../modules/error');
const { formatError } = require('../graphql/formatError');
const { Invalidator } = require('../../modules/cache/invalidator');
const { passportMiddleware } = require('../middlewares/passport');

const invalidator = new Invalidator();
const api = express.Router();

api.post('/clear-cache', passportMiddleware, async (req, res) => {
  const response = { status: 200, message: 'Cache cleared' };
  try {
    invalidator.cast();
    log.info(response.message);
    res.status(response.status).send(response);
  } catch (e) {
    log.error(`clear:cache: 💥 an error ocurred: ${e}`);
    const error = new ServerError();
    res.status(error.statusCode).send(error);
  }
});

api.use('/', (req, res, next) => {
  return graphqlHTTP({
    schema,
    rootValue: resolvers(res.locals.contentful),
    graphiql: DEV,
    formatError,
  })(req, res, next);
});

module.exports = { api };
