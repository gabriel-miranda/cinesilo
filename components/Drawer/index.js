import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Search from 'components/Icons/search.svg';
import useTranslations from 'modules/translations/hook';
import { CATEGORIES } from 'config';
import * as S from './styled';

const DrawerItem = item => {
  const t = useTranslations();
  const label = t(item);
  const link = item === 'home' ? '/' : `/${label.toLowerCase()}/`;
  return (
    <li key={item}>
      <Link href={link}>
        <S.LinkItem>{label}</S.LinkItem>
      </Link>
    </li>
  );
};

const Drawer = ({ open }) => {
  const t = useTranslations();
  return (
    <S.Drawer open={open}>
      <S.Form>
        <S.Input type="search" placeholder={t('search')} />
        <S.Icon>
          <Search height="17" width="17" />
        </S.Icon>
      </S.Form>
      <nav>
        <ul>{['home', ...CATEGORIES].map(DrawerItem)}</ul>
      </nav>
    </S.Drawer>
  );
};

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Drawer;
