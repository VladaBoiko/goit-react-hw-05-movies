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
export const Box = styled.div`
  width: 1200px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
`;
export const Wrapper = styled.div`
  padding: 50px;
`;
export const Title = styled.h1`
  color: #034986;
  margin-bottom: 20px;
`;
export const Data = styled.p`
  color: #7e8c99;
  margin-bottom: 5px;
  font-size: 20px;
`;
export const Popularity = styled.p`
  color: #7e8c99;
  margin-bottom: 10px;
  font-size: 16px;
`;
export const Overview = styled.p`
  color: #455462;
  font-size: 24px;
`;
export const Nav = styled.nav`
  margin-top: 30px;
`;
export const Wrap = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #0000002b;

  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
`;
export const AddTitle = styled.h2`
  font-size: 20px;
  color: #034986;
`;
