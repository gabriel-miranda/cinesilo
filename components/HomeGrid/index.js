import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import Thumbnail, { SIZES } from 'components/Thumbnail';
import * as S from './styled';

const prepareGrid = (post, index) => {
  if (index > 0) {
    delete post.description;
  }
  return post;
};

const addSizes = (post, index) => {
  switch (index) {
    case 0:
      post.size = SIZES.LG;
      break;
    case 1:
      post.size = SIZES.MD;
      break;
    default:
      post.size = SIZES.SM;
      break;
  }
  return post;
};

const HomeGrid = ({ posts }) => (
  <S.Section>
    <Container>
      <S.Grid>
        {posts
          .map(prepareGrid)
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
