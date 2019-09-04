import React from 'react';
import TranslationsContext from './context';

const useTranslations = () => {
  const { t } = React.useContext(TranslationsContext);
  return t;
};

export default useTranslations;
