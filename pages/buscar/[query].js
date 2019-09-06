import React from 'react';
import useTranslations from 'modules/translations/hook';

export default () => {
  const t = useTranslations();
  return <div>{t('search')}</div>;
};
