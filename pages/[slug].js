import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Error from 'next/error';
import withData from 'modules/withData';
import Container from 'components/Container';
import Time from 'components/Time';
import Markdown from 'markdown-to-jsx';

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
      <Container>
        <h1>{post.title}</h1>
        <Time>{post.created}</Time>
        <Markdown>{post.body}</Markdown>
      </Container>
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
      description
      created
      body
      id
    }
  }
`,
)(Post);
