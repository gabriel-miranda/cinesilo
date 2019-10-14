const { log } = require('../../modules/logger');
const GraphQLJSON = require('../graphql/scalars');
const { ServerError, NotFound } = require('../../modules/error');
const { CATEGORIES } = require('../../config/server');

const POST_TYPE = 'post';
const TAG_TYPE = 'tag';

function formatTags(tags) {
  if (!tags) {
    return [];
  }
  return tags.map(tag => tag.fields.name);
}

function formatImage(image) {
  // TODO: Send default image
  if (!image || !image.fields) {
    return { title: '', url: '' };
  }
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
  // TODO: Send default author
  if (!author || !author.fields) {
    return { image: '', name: '', bio: '' };
  }
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
    const q = {
      content_type: POST_TYPE,
      'fields.slug': slug,
    };
    try {
      const {
        items: [post],
      } = await contentful.get(q);
      if (!post) {
        throw new NotFound();
      }
      return formatPost(post);
    } catch (e) {
      log.error(`resolvers:post: "${slug}" 💥 `, e);
      throw new Error(JSON.stringify(e));
    }
  },
  posts: async ({
    limit = 10,
    skip = 0,
    order = '-sys.createdAt',
    category = Object.keys(CATEGORIES).join(),
    query = null,
  }) => {
    const _query = query ? { query } : {};
    const q = {
      content_type: POST_TYPE,
      limit,
      skip,
      order,
      'fields.category[in]': category,
      ..._query,
    };
    try {
      const _posts = await contentful.get(q);
      const posts = {
        total: _posts.total,
        items: _posts.items.map(formatPost),
      };
      return posts;
    } catch (e) {
      log.error(`resolvers:posts: error 💥 `, e);
      throw new Error(JSON.stringify(new ServerError()));
    }
  },
  tags: async () => {
    const q = {
      content_type: TAG_TYPE,
    };
    try {
      const _tags = await contentful.get(q);
      const tags = {
        total: _tags.total,
        items: _tags.items.map(tag => tag.name),
      };
      return tags;
    } catch (e) {
      log.error(`resolvers:tags: error 💥 `, e);
      throw new Error(JSON.stringify(new ServerError()));
    }
  },
  tag: async ({ name }) => {
    const tagQuery = {
      content_type: TAG_TYPE,
      'fields.name': name,
    };
    try {
      const {
        items: [tag],
      } = await contentful.get(tagQuery);
      if (!tag) {
        log.info(`resolvers:tag: tag with name: "${name}" not found`);
        return {
          total: 0,
          items: [],
        };
      }
      const postsQuery = {
        links_to_entry: tag.id,
      };
      const _posts = await contentful.get(postsQuery);
      const posts = {
        total: _posts.total,
        items: _posts.items.map(formatPost),
      };
      return posts;
    } catch (e) {
      log.error(`resolvers:tag: "${name}" error 💥 `, e);
      throw new Error(JSON.stringify(e));
    }
  },
});

module.exports = {
  resolvers,
};
