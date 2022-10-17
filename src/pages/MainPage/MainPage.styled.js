import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const List = styled.ul`
  padding: 0;
  display: flex;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
  gap: 30px;
  list-style: none;
`;
export const Item = styled.li`
  border: 1px solid #0000002b;
  width: 380px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
export const P = styled.p``;
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
export const Info = styled.div`
  padding: 10px;
  text-transform: lowercase;
  background-color: white;
  font-size: 15px;
  color: black;
`;
export const Accent = styled.p`
  font-size: 20px;
  text-transform: uppercase;
`;
