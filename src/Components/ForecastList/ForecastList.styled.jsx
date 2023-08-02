import styled from "styled-components";

export const List = styled.ul`
display: flex;
flex-wrap: nowrap;
justify-content: start;
list-style: none;
padding: 0;
margin: 0;
margin-bottom: 10px;
gap: 8px;
@media screen and (min-width: 768px) {
  margin-bottom: 40px;
gap: 14px;

  }
  @media screen and (min-width: 1280px) {
    gap: 20px;

  }
`;

export const Item = styled.li`
/* min-width: 30px; */
max-width: 50px;
padding: 4px;
background-color: #fff8;
text-align: center;
border-radius: 10px;
cursor: pointer;
box-shadow: ${props => (props.active ? 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' : 'none')};
transform: ${props => (props.active ? 'scale(1.02)' : 'scale(1)')};
transition: all 0.3s ease-in-out;

@media screen and (min-width: 400px) {
  padding: 6px;

  }

@media screen and (min-width: 768px) {
  max-width: 100%;
  width: 82px;
  padding: 10px;
  padding: 8px;

  }

  @media screen and (min-width: 1280px) {
  width: 150px;
  padding: 14px;

  }

:hover,
:focus{
  transform: scale(1.03);

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
`;

