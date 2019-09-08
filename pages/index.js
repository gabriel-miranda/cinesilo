import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Error from 'next/error';
import HomeGrid from 'components/HomeGrid';
import HomeCarousel from 'components/HomeCarousel';
import PostList from 'components/PostList';
import Paginator from 'components/Paginator';
import withData from 'modules/withData';
import { PAGE_SIZE } from 'config';

const Home = ({ data: { posts }, page }) => {
  // The page doesn't exist yet
  if (page > Math.ceil(posts.total / PAGE_SIZE)) {
    return <Error statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>Nextful - The next blogging platform you will use.</title>
      </Head>
      <>
        <HomeGrid posts={posts.items} />
        <HomeCarousel posts={posts.items} />
        <PostList posts={posts.items} />
        <Paginator items={posts.total} currentPage={parseInt(page, 10)} />
      </>
    </>
  );
};

Home.propTypes = {
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

Home.defaultProps = {
  page: '1',
};

export default withData(
  ({ page = 1 }) => `{
    posts(limit: ${PAGE_SIZE}, skip: ${(page - 1) * PAGE_SIZE}) {
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
)(Home);
