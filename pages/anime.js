import React from 'react';
import useTranslations from 'modules/translations/hook';
import { CATEGORIES } from 'config';

const Anime = () => {
  const t = useTranslations();
  return <div>{t('anime')}</div>;
};

Anime.getInitialProps = async () => ({ category: CATEGORIES.anime });

export default Anime;
