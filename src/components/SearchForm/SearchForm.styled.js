import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
export const ErMessage = styled(ErrorMessage)`
  font-size: 15px;
  font-weight: bold;
  color: rgb(201, 49, 42);
`;
export const Input = styled(Field)`
  display: block;
  background-color: #e1e6e9;
  min-width: 250px;
  padding: 10px 20px;
  border-top: 1px solid rgb(27, 100, 154);
  border-left: 1px solid rgb(27, 100, 154);
  border-right: 1px solid white;
  border-bottom: 1px solid white;
  color: rgb(50, 50, 29);
  font-size: 18px;
`;
export const Forma = styled(Form)`
  background-color: rgb(251, 251, 251);
  border: 1px solid rgb(152, 154, 27);
  padding: 10px;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  color: rgb(87, 89, 11);
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 40px;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  background-color: #18344c;
  color: white;
  border: none;
  border-radius: 5px;
  min-height: 44px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #021b31;
  }
`;
