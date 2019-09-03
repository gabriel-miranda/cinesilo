const { buildSchema } = require('graphql');

const schema = buildSchema(`
  scalar JSON

  type Query {
    post(slug: String!): Post
    posts(skip: Int, limit: Int): Feed
  }

  type Post {
    id: ID!
    slug: String!
    description: String
    title: String!
    category: String!
    created: String!
    body: JSON
    author: Author!
    tags: [String]!
    image: Image!
  }

  type Author {
    name: String!
    bio: String!
    image: Image!
  }

  type Image {
    title: String!
    url: String!
    width: String!
    height: String!
    contentType: String!
  }

  type Feed {
    total: Int!
    items: [Post]
  }
`);

module.exports = {
  schema,
};
