import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Error from 'next/error';
import PostList from 'components/PostList';
import Paginator from 'components/Paginator';
import withData from 'modules/withData';
import { Layout, RightContent, Aside } from 'components/Layout';
import { PAGE_SIZE, CATEGORIES } from 'config';

const Series = ({ data: { posts }, page }) => {
  // The page doesn't exist yet
  if (page > Math.ceil(posts.total / PAGE_SIZE)) {
    return <Error statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>Series - cine series y entretenimiento | cinesilo </title>
      </Head>
      <Layout>
        <RightContent>
          <PostList posts={posts.items} />
          <Paginator items={posts.total} currentPage={parseInt(page, 10)} />
        </RightContent>
        <Aside />
      </Layout>
    </>
  );
};

Series.propTypes = {
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

Series.defaultProps = {
  page: '1',
};

Series.getInitialProps = async () => ({ category: CATEGORIES.series });

export default withData(
  ({ page = 1 }) => `{
    posts(limit: ${PAGE_SIZE}, skip: ${(page - 1) *
    PAGE_SIZE}, category: "series") {
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
)(Series);
