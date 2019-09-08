import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from 'components/Thumbnail';
import * as S from './styled';

const preparePost = post => {
  const _post = { ...post };
  _post.icon = 'plain';
  delete _post.description;
  return _post;
};

const HomeCarousel = ({ posts }) => (
  <S.ContainerWindow>
    <S.Container>
      {posts
        .slice(0, 3)
        .map(preparePost)
        .map(Thumbnail)}
    </S.Container>
  </S.ContainerWindow>
);

HomeCarousel.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default HomeCarousel;
