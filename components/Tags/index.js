import React from 'react';
import PropTypes from 'prop-types';
import Tag from 'components/Icons/tag.svg';
import * as S from './styled';

function TagItem(tag) {
  return <S.Item key={tag}>{tag}</S.Item>;
}

const Tags = ({ tags, showIcon }) => (
  <S.List>
    {showIcon && (
      <S.Item icon>
        <Tag height={15} width={15} />
      </S.Item>
    )}
    {tags && tags.map(TagItem)}
  </S.List>
);

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  showIcon: PropTypes.bool,
};

Tags.defaultProps = {
  showIcon: true,
};

export default Tags;
