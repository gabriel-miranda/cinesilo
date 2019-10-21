import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Tag from 'components/Icons/tag.svg';
import * as S from './styled';

function TagItem(tag) {
  const url = `/tags/${tag.replace(' ', '-')}`;
  return (
    <Link href="/tags/[tag]" as={url} key={tag}>
      <S.Link href={url}>
        <S.Item>{tag}</S.Item>
      </S.Link>
    </Link>
  );
}

function TagList({ tags, showIcon }) {
  const ListComponent = showIcon ? S.ListPost : S.List;
  return (
    <ListComponent>
      {showIcon && (
        <Link href="/tags/index" as="/tags">
          <S.Link href="/tags">
            <S.Item icon>
              <Tag height={15} width={15} />
            </S.Item>
          </S.Link>
        </Link>
      )}
      {tags && tags.map(TagItem)}
    </ListComponent>
  );
}

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  showIcon: PropTypes.bool,
};

TagList.defaultProps = {
  showIcon: true,
};

export default TagList;
