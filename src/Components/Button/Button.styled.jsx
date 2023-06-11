import styled from 'styled-components';

export const Btn = styled.button`
display: block;
width: 120px;
height: 35px;
margin: 0 auto;
border-radius: 10.3108px;
background-color: ${props => props.current ? '#f40' : '#fff'};
`;

export const Text = styled.p`
font-size: 18px;
line-height: 22px;

color: inherit;
`;