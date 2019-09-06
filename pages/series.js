import React from 'react';
import useTranslations from 'modules/translations/hook';
import { CATEGORIES } from 'config';

const Series = () => {
  const t = useTranslations();
  return <div>{t('series')}</div>;
};

Series.getInitialProps = async () => ({ category: CATEGORIES.series });

export default Series;
