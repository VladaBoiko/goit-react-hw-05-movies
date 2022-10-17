import styled from 'styled-components';
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
export const ListItem = styled.li`
  border: 1px solid #0000002b;
  width: 380px;
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
