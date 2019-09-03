const { log } = require('../../modules/logger');
const GraphQLJSON = require('../graphql/scalars');
const { ServerError, NotFound } = require('../../modules/error');

const type = 'post';

const resolvers = contentful => ({
  JSON: GraphQLJSON,
  post: async ({ slug }) => {
    const query = {
      content_type: type,
      'fields.slug': slug,
    };
    try {
      const {
        items: [post],
      } = await contentful.get(query);
      if (!post) {
        throw new NotFound();
      }
      return post;
    } catch (e) {
      log.error(e);
      throw new Error(JSON.stringify(e));
    }
  },
  posts: async ({ limit = 10, skip = 0 }) => {
    const query = {
      content_type: type,
      limit,
      skip,
    };
    try {
      const posts = await contentful.get(query);
      return posts;
    } catch (e) {
      log.error(e);
      throw new Error(JSON.stringify(new ServerError()));
    }
  },
});

module.exports = {
  resolvers,
};
