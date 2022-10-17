import { useState, useEffect } from 'react';
import { dataMovieList } from 'API/api';
import MainPageItem from './ListItem';

export const MainPage = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const materials = await dataMovieList();
        setMaterials(materials);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, []);
  return (
    <ul>
      {materials.map(movie => {
        return <MainPageItem name={movie.title} id={movie.id} key={movie.id} />;
      })}{' '}
    </ul>
  );
};
