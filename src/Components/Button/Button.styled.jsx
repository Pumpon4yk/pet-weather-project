import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Btn = styled(NavLink)`
display: block;
width: 100px;
padding: 6px;
border-radius: 10px;
background-color: '#fff';
text-decoration: none;
text-align: center;
`;

export const Text = styled.p`
font-size: 18px;
line-height: 22px;

color: inherit;
`;