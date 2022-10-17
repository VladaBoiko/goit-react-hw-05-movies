import { useParams, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { dataMovie } from 'API/api';
import { NavigationLink } from './MovieDetail.styled';
const IMG_URL = 'https://image.tmdb.org/t/p/original';
export const MovieDetail = () => {
  const [material, setMaterial] = useState({});
  const { id } = useParams();
  useEffect(() => {
    localStorage.setItem('currentId', JSON.stringify(id));

    async function getMovie() {
      try {
        const movie = await dataMovie(id);
        setMaterial(movie);
      } catch (error) {
        console.log(error);
      }
    }
    getMovie();
  }, [id]);
  const {
    title,
    poster_path,
    original_title,
    popularity,
    release_date,
    overview,
  } = material;
  const img = `${IMG_URL}${poster_path}`;
  return (
    <div>
      <>
        {' '}
        <img src={img} alt={title} width="400" />
        <>
          <p>{original_title}</p>
          <p>Release date: {release_date}</p>
          <p>{popularity}</p>
          <p>Overview: {overview}</p>
        </>
      </>
      <>
        <p>Additional info</p>
        <nav>
          <NavigationLink to="cast">Cast</NavigationLink>
          <NavigationLink to="reviews">Reviews</NavigationLink>
        </nav>
        <Outlet />
      </>
    </div>
  );
};
