import { useState, useEffect } from 'react';
import { dataSearch } from 'API/api';
import { List } from '../../pages/MainPage/MainPage.styled';
import ListBySearchItem from './../ListBySearchItem/ListBySearchItem';

export const ListBySearch = ({ query }) => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const materials = await dataSearch(query);
        setMaterials(materials.results);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, [query]);
  if (materials.length === 0) {
    return;
  }
  return (
    <List>
      {materials.map(movie => {
        return (
          <ListBySearchItem itemData={movie} query={query} key={movie.id} />
        );
      })}{' '}
    </List>
  );
};
