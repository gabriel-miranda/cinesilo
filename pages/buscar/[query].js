import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Error from 'next/error';
import PostList from 'components/PostList';
import Paginator from 'components/Paginator';
import withData from 'modules/withData';
import { Layout, LeftContent, Aside } from 'components/Layout';
import { PAGE_SIZE } from 'config';

const Buscar = ({ data: { posts }, page }) => {
  // The page doesn't exist yet
  if (page > Math.ceil(posts.total / PAGE_SIZE)) {
    return <Error statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>Buscar - cine series y entretenimiento | cinesilo </title>
      </Head>
      <Layout spacing>
        <LeftContent>
          <PostList posts={posts.items} />
          <Paginator items={posts.total} currentPage={parseInt(page, 10)} />
        </LeftContent>
        <Aside />
      </Layout>
    </>
  );
};

Buscar.propTypes = {
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

Buscar.defaultProps = {
  page: '1',
};

export default withData(
  ({ page = 1, query }) => `{
    posts(limit: ${PAGE_SIZE}, skip: ${(page - 1) *
    PAGE_SIZE}, query: "${query.replace('-', ' ')}") {
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
)(Buscar);
