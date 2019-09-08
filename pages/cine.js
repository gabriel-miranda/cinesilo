import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Error from 'next/error';
import PostList from 'components/PostList';
import Paginator from 'components/Paginator';
import withData from 'modules/withData';
import { PAGE_SIZE, CATEGORIES } from 'config';

const Cine = ({ data: { posts }, page }) => {
  // The page doesn't exist yet
  if (page > Math.ceil(posts.total / PAGE_SIZE)) {
    return <Error statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>Cine - cine series y entretenimiento | cinesilo </title>
      </Head>
      <>
        <PostList posts={posts.items} />
        <Paginator items={posts.total} currentPage={parseInt(page, 10)} />
      </>
    </>
  );
};

Cine.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.shape({
      total: PropTypes.number.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
        }),
      ).isRequired,
    }),
  }).isRequired,
  page: PropTypes.string,
};

Cine.defaultProps = {
  page: '1',
};

Cine.getInitialProps = async () => ({ category: CATEGORIES.movies });

export default withData(
  ({ page = 1 }) => `{
    posts(limit: ${PAGE_SIZE}, skip: ${(page - 1) *
    PAGE_SIZE}, category: "movies") {
      total
      items {
        id
        slug
        title
        description
        created
        category
        image {
          url
          title
        }
      }
    }
  }
`,
)(Cine);
