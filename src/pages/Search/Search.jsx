import { useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import { ListBySearch } from 'components/ListBySearch/ListBySearch';

export default function Search() {
  const [query, setQuery] = useState('');
  const updateQuery = values => {
    setQuery(values.query);
  };
  return (
    <>
      <SearchForm updateQuery={updateQuery} />
      {query && <ListBySearch query={query} />}
    </>
  );
}
