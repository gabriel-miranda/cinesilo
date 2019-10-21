import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Time from 'components/Time';
import FastForward from 'components/Icons/fast-forward.svg';
import * as S from './styled';

const Item = post => {
  const { image } = post;
  return (
    <li key={post.slug}>
      <Link href={`/${post.slug}`}>
        <S.Item href={`/${post.slug}`}>
          <S.Figure category={post.category}>
            <S.Thumbnail
              src={`${image.url}?fm=webp&w=230&h=230&fit=thumb`}
              width="230"
              height="230"
              alt={image.title}
            />
          </S.Figure>
          <S.Content>
            <S.Title>{post.title}</S.Title>
            <Time grey>{post.created}</Time>
            <S.Description>{post.description}</S.Description>
            <S.Button>
              Leer más <FastForward width="15" height="15" />
            </S.Button>
          </S.Content>
        </S.Item>
      </Link>
    </li>
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
