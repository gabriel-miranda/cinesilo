import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Error from 'next/error';
import PostList from 'components/PostList';
import Paginator from 'components/Paginator';
import withData from 'modules/withData';
import { PAGE_SIZE, CATEGORIES } from 'config';

const Anime = ({ data: { posts }, page }) => {
  // The page doesn't exist yet
  if (page > Math.ceil(posts.total / PAGE_SIZE)) {
    return <Error statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>Anime - cine series y entretenimiento | cinesilo </title>
      </Head>
      <>
        <PostList posts={posts.items} />
        <Paginator items={posts.total} currentPage={parseInt(page, 10)} />
      </>
    </>
  );
};

Anime.propTypes = {
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

Anime.defaultProps = {
  page: '1',
};

Anime.getInitialProps = async () => ({ category: CATEGORIES.anime });

export default withData(
  ({ page = 1 }) => `{
    posts(limit: ${PAGE_SIZE}, skip: ${(page - 1) *
    PAGE_SIZE}, category: "anime") {
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
)(Anime);
