import styled from "styled-components";

export const List = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 20px;
list-style: none;
margin-bottom: 40px;
`;

export const Item = styled.li`
width: 150px;
padding: 10px;
background-color: #fff8;
text-align: center;
border-radius: 10px;
cursor: pointer;
box-shadow: ${props => (props.active ? 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' : 'none')};
transform: ${props => (props.active ? 'scale(1.02)' : 'scale(1)')};

:hover,
:focus{
  transform: scale(1.03);

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
`;

