import { useState, useEffect } from 'react';
import { dataSearch } from 'API/api';
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
    <ul>
      {materials.map(movie => {
        console.log(movie);
        return (
          <ListBySearchItem name={movie.title} id={movie.id} key={movie.id} />
        );
      })}{' '}
    </ul>
  );
};
