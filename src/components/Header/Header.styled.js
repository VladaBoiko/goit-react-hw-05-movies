import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const HeaderSt = styled.header`
  height: 90px;
  border-bottom: 1px solid #b3b9e5;
  background-color: #18344c;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
export const NavigationLink = styled(NavLink)`
  &:not(:last-child) {
    margin-right: 40px;
  }
  text-decoration: none;
  color: white;
  &.active {
    color: #d54a20;
  }
`;
