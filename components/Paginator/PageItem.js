import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Item, StyledLink } from './styled';

const PageItem = ({ children, page, currentPage }) => {
  const mask = page === 1 ? '/' : `/page/${page}/`;
  return (
    <Item>
      <Link href={`/?page=${page}`} as={mask}>
        <StyledLink selected={currentPage === page} href={mask}>
          {children}
        </StyledLink>
      </Link>
    </Item>
  );
};

PageItem.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.number.isRequired,
  currentPage: PropTypes.number,
};

PageItem.defaultProps = {
  currentPage: null,
};

export default PageItem;
