import React, { useState } from 'react';
import { useRouter } from 'next/router';
import SearchIcon from 'components/Icons/search.svg';
import useTranslations from 'modules/translations/hook';
import * as S from './styled';

const Search = props => {
  const t = useTranslations();
  const router = useRouter();
  const [query, setQuery] = useState('');

  const route = t('search').toLowerCase();
  const handleSubmit = e => {
    e.preventDefault();
    router.push(
      `/${route}/[query]`,
      `/${route}/${query.trim().replace(/\s/g, '-')}`,
    );
  };
  return (
    <S.Form onSubmit={handleSubmit} role="search">
      <S.Input
        value={query}
        onChange={({ target: { value } }) => setQuery(value)}
        placeholder={t('search')}
        type="search"
        role="searchbox"
        {...props}
      />
      <S.Button show={!query} type="submit" aria-label={t('search')}>
        <SearchIcon height="17" width="17" />
      </S.Button>
    </S.Form>
  );
};

export default Search;
