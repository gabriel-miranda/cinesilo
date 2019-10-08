import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import Thumbnail, { SIZES } from 'components/Thumbnail';
import * as S from './styled';

const preparePost = (post, index) => {
  const _post = { ...post };
  if (index > 0) {
    delete _post.description;
  }
  _post.icon = 'grid';
  return _post;
};

const addSizes = (post, index) => {
  const _post = { ...post };
  switch (index) {
    case 0:
      _post.size = SIZES.LG;
      break;
    case 1:
      _post.size = SIZES.MD;
      break;
    default:
      _post.size = SIZES.SM;
      break;
  }
  return _post;
};

const HomeGrid = ({ posts }) => (
  <S.Section>
    <Container>
      <S.Grid>
        {posts
          .map(preparePost)
          .map(addSizes)
          .map(Thumbnail)}
      </S.Grid>
    </Container>
  </S.Section>
);

HomeGrid.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default HomeGrid;
