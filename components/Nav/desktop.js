import React from 'react';
import PropTypes from 'prop-types';
import { CATEGORIES } from 'config';
import Link from 'next/link';
import Search from 'components/Search';
import useTranslations from 'modules/translations/hook';
import * as S from './styled';

const NavItem = ({ item, active }) => {
  const t = useTranslations();
  const label = t(item);
  const href = `/${label.toLowerCase()}`;
  return (
    <li key={item}>
      <Link href={href}>
        <S.LinkItem href={href} active={item === active}>
          {label}
        </S.LinkItem>
      </Link>
    </li>
  );
};

NavItem.propTypes = {
  item: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
};

const DesktopNav = ({ active }) => (
  <S.DesktopNav>
    <S.List>
      {Object.keys(CATEGORIES)
        .map(item => ({ item, active }))
        .map(NavItem)}
    </S.List>
    <Search />
  </S.DesktopNav>
);

DesktopNav.propTypes = {
  active: PropTypes.string.isRequired,
};

export default DesktopNav;
