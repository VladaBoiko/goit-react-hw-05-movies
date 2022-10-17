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
  padding: 10px;
  border-bottom: 1px solid #0000002b;
`;

export const Accent = styled.p`
  font-size: 15px;
  text-transform: uppercase;
  color: #18344c;
  margin-bottom: 5px;
`;
export const Span = styled.span`
  font-size: 20px;
  margin-left: 20px;
  font-weight: bold;
`;
export const Data = styled.p`
  font-size: 15px;
  text-transform: lowercase;
  color: #18344c;
  margin-bottom: 20px;
`;
export const Text = styled.p`
  line-height: 1.4;
  color: #053e70;
  font-size: 16px;
`;
