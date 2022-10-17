import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { MainPage } from 'pages/MainPage/MainPage';
import Search from 'pages/Search/Search';
import { MovieDetail } from 'pages/MovieDetail/MovieDetail';
import { Cast } from 'pages/Cast/Cast';
import { Review } from 'pages/Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="search" element={<Search />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
          <Route path="/:id" element={<MovieDetail />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
