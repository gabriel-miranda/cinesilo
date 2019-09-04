import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Error from 'next/error';
import Container from 'components/Container';
import Paginator from 'components/Paginator';
import withData from 'modules/withData';
import { PAGE_SIZE } from 'config';
import useTranslations from 'modules/translations/hook';

const Home = ({ data: { posts }, page }) => {
  // The page doesn't exist yet
  if (page > Math.ceil(posts.total / PAGE_SIZE)) {
    return <Error statusCode={404} />;
  }
  const t = useTranslations();
  return (
    <>
      <Head>
        <title>Nextful - The next blogging platform you will use.</title>
      </Head>
      <Container>
        {posts.items.map(post => (
          <div key={post.id}>{post.title}</div>
        ))}
        <p>{t('movies')}</p>
        <Paginator items={posts.total} currentPage={parseInt(page, 10)} />
      </Container>
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
      }
    }
  }
`,
)(Home);
