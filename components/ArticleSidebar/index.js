import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from 'components/Thumbnail';
import Container from './styled';

const preparePost = post => {
  const _post = { ...post };
  _post.icon = 'plain';
  return _post;
};

const ArticleSidebar = ({ posts }) => (
  <Container>{posts.map(preparePost).map(Thumbnail)}</Container>
);

ArticleSidebar.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default ArticleSidebar;
