import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Header from './Header/Header';

export const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  );
};
