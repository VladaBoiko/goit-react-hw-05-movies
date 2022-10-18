/* eslint-disable no-unused-vars */
import { useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';

import { ListBySearch } from 'components/ListBySearch/ListBySearch';
export default function Search() {
  const [query, setQuery] = useState('');
  // const [searchParams] = useSearchParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const updateQuery = values => {
    setQuery(values);
    localStorage.setItem('currentQuery', JSON.stringify(values));
    // console.log('hello');
  };
  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <SearchForm
        updateQueryString={updateQueryString}
        updateQuery={updateQuery}
      />
      {searchQuery && <ListBySearch query={searchQuery} />}
    </>
  );
}
