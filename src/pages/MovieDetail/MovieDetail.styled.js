import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  &:not(:last-child) {
    margin-right: 40px;
  }
  text-decoration: none;
  color: black;
  &.active {
    color: #d54a20;
  }
`;
