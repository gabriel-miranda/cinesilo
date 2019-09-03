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
  }

  type Feed {
    total: Int!
    items: [Post]
  }
`);

module.exports = {
  schema,
};
