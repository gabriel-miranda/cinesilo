import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from 'components/Thumbnail';
import Time from 'components/Time';
import FastForward from 'components/Icons/fast-forward.svg';
import * as S from './styled';

const preparePost = ({ category, image, slug }) => ({ category, image, slug });

const Item = post => {
  const prepared = preparePost(post);
  return (
    <S.Item key={post.slug}>
      <Thumbnail as="div" {...prepared} />
      <S.Content>
        <S.Title>{post.title}</S.Title>
        <Time grey>{post.created}</Time>
        <S.Description>{post.description}</S.Description>
        <S.Button>
          Leer más <FastForward width="15" height="15" />
        </S.Button>
      </S.Content>
    </S.Item>
  );
};

const PostList = ({ posts }) => <S.List>{posts.map(Item)}</S.List>;

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default PostList;
