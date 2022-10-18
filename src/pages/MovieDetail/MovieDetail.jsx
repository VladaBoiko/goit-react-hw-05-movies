import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { dataMovie } from 'API/api';
import {
  NavigationLink,
  Box,
  Wrapper,
  Title,
  Data,
  Popularity,
  Overview,
  Nav,
  Wrap,
  AddTitle,
  GoBackLink,
} from './MovieDetail.styled';
const IMG_URL = 'https://image.tmdb.org/t/p/original';
let imgPath = '';
export default function MovieDetail() {
  const [material, setMaterial] = useState({});
  const { id } = useParams();
  const query = JSON.parse(window.localStorage.getItem('currentQuery'));
  const location = useLocation();
  console.log(location.state);
  const backLinkHref = location.state?.from ?? '/';
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
  if (!material) {
    return;
  }
  const {
    title,
    poster_path,
    original_title,
    popularity,
    release_date,
    overview,
  } = material;
  if (!poster_path) {
    imgPath =
      'https://media.istockphoto.com/vectors/cartoonish-yoga-cat-with-a-clock-and-a-lettering-phrase-please-wait-vector-id1291715830?k=20&m=1291715830&s=612x612&w=0&h=-6vPX8c2zREEaJo3cbxlDbNGAM97yiTHEWpSspmxjJc=';
  }
  if (poster_path) {
    imgPath = `${IMG_URL}${poster_path}`;
  }
  const img = `${imgPath}`;
  return (
    <>
      {' '}
      <GoBackLink to={backLinkHref}>Go back</GoBackLink>
      <Box>
        <img src={img} alt={title} width="400" />
        <Wrapper>
          <Title>{original_title}</Title>
          <Data>Release date: {release_date}</Data>
          <Popularity>Popularity: {popularity}</Popularity>
          <Overview>Overview: {overview}</Overview>
        </Wrapper>
      </Box>
      <Wrap>
        <AddTitle>Additional info</AddTitle>
        <Nav>
          <NavigationLink to="cast" state={{ from: `/search?query=${query}` }}>
            Cast
          </NavigationLink>
          <NavigationLink
            to="reviews"
            state={{ from: `/search?query=${query}` }}
          >
            Reviews
          </NavigationLink>
        </Nav>
      </Wrap>
      <Outlet />
    </>
  );
}
