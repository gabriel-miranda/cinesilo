const { log } = require('../../modules/logger');
const GraphQLJSON = require('../graphql/scalars');
const { ServerError, NotFound } = require('../../modules/error');

const type = 'post';

function formatTags(tags) {
  return tags.map(tag => tag.fields.name);
}

function formatImage(image) {
  const { file, title } = image.fields;
  const { url, contentType } = file;
  const size = file.details.image;
  return {
    url,
    title,
    contentType,
    ...size,
  };
}

function formatAuthor(author) {
  const image = formatImage(author.fields.image);
  return {
    ...author.fields,
    image,
  };
}

function formatPost(post) {
  const tags = formatTags(post.tags);
  const author = formatAuthor(post.author);
  const image = formatImage(post.image);
  return {
    ...post,
    tags,
    author,
    image,
  };
}

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
      return formatPost(post);
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
