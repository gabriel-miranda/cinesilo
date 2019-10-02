import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Error from 'next/error';
import { useRouter } from 'next/router';
import withData from 'modules/withData';
import { Layout, LeftContent, Aside } from 'components/Layout';
import ArticleHeader from 'components/ArticleHeader';
import ArticleSocialBar from 'components/ArticleSocialBar';
import ArticleShareBar from 'components/ArticleShareBar';
import ArticleSidebar from 'components/ArticleSidebar';
import Markdown from 'components/Markdown';
import Disqus from 'components/Disqus';
import { BASE_URL } from 'config';

const Post = ({ data: { post, posts }, errors }) => {
  if (errors) {
    const [e] = errors;
    return <Error statusCode={e.statusCode || 500} />;
  }

  const router = useRouter();

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
        <LeftContent>
          <ArticleSocialBar />
          <Markdown>{post.body}</Markdown>
          <ArticleShareBar />
          <Disqus
            identifier={router.query.slug}
            url={`${BASE_URL}/${router.query.slug}`}
            title={post.title}
          />
        </LeftContent>
        <Aside>
          <ArticleSidebar posts={posts.items} />
        </Aside>
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
    posts: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
        }),
      ),
    }).isRequired,
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
    posts(limit: 3, skip: 0) {
      total
      items {
        id
        slug
        title
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
)(Post);
