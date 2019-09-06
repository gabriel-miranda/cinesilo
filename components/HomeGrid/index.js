import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import * as S from './styled';

const GridItem = (post, index) => (
  <S.GridItem key={`${post.title}-${index}`}>
    <S.Title>{post.title}</S.Title>
  </S.GridItem>
);

const HomeGrid = ({ posts }) => (
  <S.Section>
    <Container>
      <S.Grid>
        {Array(4)
          .fill(posts[0])
          .map(GridItem)}
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
