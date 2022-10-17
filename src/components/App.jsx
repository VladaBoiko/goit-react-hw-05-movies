import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const Search = lazy(() => import('../pages/Search/Search'));
const MovieDetail = lazy(() => import('../pages/MovieDetail/MovieDetail'));
const Cast = lazy(() => import('./Cast/Cast'));
const Review = lazy(() => import('./Reviews/Reviews'));
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="search" element={<Search />} />
          <Route path="search/:id" element={<MovieDetail />}>
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
