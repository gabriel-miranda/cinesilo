import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Error from 'next/error';
import PostList from 'components/PostList';
import Paginator from 'components/Paginator';
import withData from 'modules/withData';
import { Layout, RightContent, Aside } from 'components/Layout';
import useTranslations from 'modules/translations/hook';
import { PAGE_SIZE } from 'config';

export default category => {
  const Category = ({ data: { posts }, page }) => {
    // The page doesn't exist yet
    if (page > Math.ceil(posts.total / PAGE_SIZE)) {
      return <Error statusCode={404} />;
    }
    const t = useTranslations();
    return (
      <>
        <Head>
          <title>
            {t(category)} - cine series y entretenimiento | cinesilo{' '}
          </title>
        </Head>
        <Layout spacing>
          <RightContent>
            <PostList posts={posts.items} />
            <Paginator items={posts.total} currentPage={parseInt(page, 10)} />
          </RightContent>
          <Aside />
        </Layout>
      </>
    );
  };

  Category.propTypes = {
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

  Category.defaultProps = {
    page: '1',
  };

  Category.getInitialProps = async () => ({ category });

  return withData(
    ({ page = 1 }) => `{
    posts(limit: ${PAGE_SIZE}, skip: ${(page - 1) *
      PAGE_SIZE}, category: "${category}") {
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
  )(Category);
};
