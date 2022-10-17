import { useState, useEffect } from 'react';
import { dataMovieList } from 'API/api';
import MainPageItem from './ListItem';
import { List } from './MainPage.styled';

export default function MainPage() {
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
    <List>
      {materials.map(movie => {
        return <MainPageItem itemData={movie} key={movie.id} />;
      })}{' '}
    </List>
  );
}
