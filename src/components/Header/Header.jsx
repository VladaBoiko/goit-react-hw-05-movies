import { HeaderSt, NavigationLink } from './Header.styled';

export default function Header() {
  return (
    <HeaderSt>
      <nav>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/search">Movies</NavigationLink>
      </nav>
    </HeaderSt>
  );
}
