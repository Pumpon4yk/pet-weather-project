import styled from 'styled-components';
import { RxCross1 } from 'react-icons/rx';


export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
max-width: 450px;
margin: 0 auto 20px;

@media screen and (min-width: 787px){
flex-direction: row;

  width: 787px;

  };

  @media screen and (min-width: 1200px){
    width: 1170;
  };
`;

export const Input = styled.input`
font-family: inherit;
  width: 90%;
  border: 0;
  outline: 0;
  border-radius: 10px;;
  font-size: 18px;
  color: $white;
  padding: 7px;
  padding-right: 32px;
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  :hover,
  :focus{
    transform: scale(1.02);
  }
`;

export const BtnSend = styled.button`
background: #F77D24;
  display: inline-block;
  color: #fff;
  font-family: inherit;
  font-size: 18px;
  padding: 7px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

:hover,
:focus{
  transform: scale(1.02);
}
`;

