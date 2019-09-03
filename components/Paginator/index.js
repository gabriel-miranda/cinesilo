import React from 'react';
import PropTypes from 'prop-types';
import ChevronLeft from 'mdi-react/ChevronLeftIcon';
import ChevronRight from 'mdi-react/ChevronRightIcon';
import { PAGE_SIZE } from 'config';
import PageItem from './PageItem';
import { List } from './styled';

const FIRST_PAGE = 1;
const PAGES_MAX_SHOWN = 5;
const ICON_SIZE = 16;

const createPages = (total, currentPage) =>
  Array(total)
    .fill()
    .map((e, i) => i + 1)
    .splice(
      Math.max(
        0,
        Math.min(
          currentPage - Math.ceil(PAGES_MAX_SHOWN / 2),
          total - PAGES_MAX_SHOWN,
        ),
      ),
      PAGES_MAX_SHOWN,
    );

const Paginator = ({ items, currentPage }) => {
  const total = Math.ceil(items / PAGE_SIZE);
  const pages = createPages(total, currentPage);
  if (total < 2) {
    return null;
  }
  return (
    <List>
      {currentPage !== FIRST_PAGE && (
        <PageItem page={currentPage - 1}>
          <ChevronLeft size={ICON_SIZE} />
        </PageItem>
      )}
      {pages.map(page => (
        <PageItem page={page} key={page} currentPage={currentPage}>
          {page}
        </PageItem>
      ))}
      {currentPage !== total && (
        <PageItem page={currentPage + 1}>
          <ChevronRight size={ICON_SIZE} />
        </PageItem>
      )}
    </List>
  );
};

Paginator.propTypes = {
  items: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Paginator;
