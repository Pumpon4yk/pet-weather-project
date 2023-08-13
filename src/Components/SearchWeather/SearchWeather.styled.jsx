import styled from 'styled-components';

export const Form = styled.form`
position: relative;
max-width: 450px;
padding: 0 30px;
margin: ${props => props.locations && "0 auto"};
`;

export const Label = styled.label`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const Input = styled.input`
font-family: inherit;
  width: 100%;
  border: 0;
  outline: 0;
  border-radius: 10px;;
  font-size: 18px;
  color: $white;
  padding: 7px;
  padding-right: 36px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  @media screen and (min-width: 768px) {

  }
  @media screen and (min-width: 1280px) {
    padding-right: 48px;

  }
`;

export const List = styled.ul`
position: absolute;
top: 35px;
left: 0px;
max-width: 440px;
background-color: #fffd;
z-index:1;
margin: 0 ;
padding: 16px;
border-radius:10px;
list-style: none;
`;

export const Item = styled.li`
padding: 8px 0;
cursor: pointer;
transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
:hover,
  :focus{
    transform: scale(1.02);
  }
`;

export const BtnClear = styled.button`
position: absolute;
right: 15px;
width: 32px;
height: 32px;
background: transparent;
  display: block;
  
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);

:hover,
:focus{
  transform: scale(1.02);
}
`;

