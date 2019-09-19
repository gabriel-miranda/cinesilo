import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Error from 'next/error';
import withData from 'modules/withData';
import { Layout, RightContent } from 'components/Layout';
import ArticleHeader from 'components/ArticleHeader';
import Markdown from 'components/Markdown';

const Post = ({ data: { post }, errors }) => {
  if (errors) {
    const [e] = errors;
    return <Error statusCode={e.statusCode || 500} />;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <ArticleHeader
        bg={post.image.url}
        created={post.created}
        description={post.description}
      >
        {post.title}
      </ArticleHeader>
      <Layout small>
        <RightContent>
          <Markdown>{post.body}</Markdown>
        </RightContent>
      </Layout>
    </>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
      description: PropTypes.string,
      created: PropTypes.string,
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
    }),
  }).isRequired,
  errors: PropTypes.arrayOf(PropTypes.object),
};

Post.defaultProps = {
  errors: null,
};

export default withData(
  ({ slug }) => `{
    post(slug: "${slug}") {
      title
      category
      image {
        url
      }
      description
      created
      body
      id
    }
  }
`,
)(Post);
