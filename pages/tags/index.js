import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import TagList from 'components/TagList';
import Title from 'components/Title';
import withData from 'modules/withData';
import { Layout, LeftContent, Aside } from 'components/Layout';

const Tags = ({ data: { tags } }) => {
  return (
    <>
      <Head>
        <title>Tags - cine series y entretenimiento | cinesilo </title>
      </Head>
      <Layout>
        <LeftContent>
          <Title>Tags</Title>
          <TagList tags={tags.items} showIcon={false} />
        </LeftContent>
        <Aside />
      </Layout>
    </>
  );
};

Tags.propTypes = {
  data: PropTypes.shape({
    tags: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }),
  }).isRequired,
};

export default withData(
  () => `{
    tags {
      items
    }
  }
`,
)(Tags);
