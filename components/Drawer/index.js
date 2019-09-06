import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Search from 'components/Search';
import useTranslations from 'modules/translations/hook';
import { CATEGORIES } from 'config';
import * as S from './styled';

const HOME = 'home';

const DrawerItem = ({ item, active }) => {
  const t = useTranslations();
  const label = t(item);
  const link = item === HOME ? '/' : `/${label.toLowerCase()}`;
  return (
    <li key={item}>
      <Link href={link}>
        <S.LinkItem active={item === active}>{label}</S.LinkItem>
      </Link>
    </li>
  );
};

DrawerItem.propTypes = {
  item: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
};

const Drawer = ({ open, active }) => {
  return (
    <S.Drawer open={open}>
      <Search />
      <nav>
        <ul>
          {[HOME, ...Object.keys(CATEGORIES)]
            .map(item => ({ item, active }))
            .map(DrawerItem)}
        </ul>
      </nav>
    </S.Drawer>
  );
};

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  active: PropTypes.string.isRequired,
};

export default Drawer;
