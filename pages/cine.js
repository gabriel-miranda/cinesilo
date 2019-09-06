import React from 'react';
import useTranslations from 'modules/translations/hook';
import { CATEGORIES } from 'config';

const Cine = () => {
  const t = useTranslations();
  return <div>{t('movies')}</div>;
};

Cine.getInitialProps = async () => ({ category: CATEGORIES.movies });

export default Cine;
