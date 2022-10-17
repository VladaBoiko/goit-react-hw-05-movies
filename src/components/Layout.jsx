import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { GlobalStyle } from './GlobalStyle';
import Header from './Header/Header';

export const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
