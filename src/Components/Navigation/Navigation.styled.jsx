import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  border-bottom: 1px solid #fff8;
  background-color: #fff4;

`;

export const Container = styled.div`
  max-width: 480px;
  display: flex;
  align-items: center;
  height: 70px;
margin: 0 auto;
padding: 0 15px;

@media screen and (min-width: 768px) {
max-width: 100%;
width: 768px;
  }

  @media screen and (min-width: 1280px) {
width: 1280px;
  }
`

export const ContainerLogo = styled.div`
display: flex;
align-items: center;
gap: 8px;
`

export const TitleLogo = styled.p`
color: #934ed1;
display: none;
text-shadow: 2px 2px 6px rgba(0,0,0,0.3);

@media screen and (min-width: 768px) {
  display: block;
  font-size: 20px;

  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;

  }
`

export const Nav = styled.nav`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 0 15px 0 auto;
  padding: 0 15px;
`;

export const Link = styled(NavLink)`
  color: #212121;
  font-size: 14px;
  padding: 10px;
  text-decoration: none;

  border-radius: 10px;
  text-align: center;
  transition: all 0.3s ease-in-out;


  @media screen and (min-width: 768px) {
    font-size: 18px;
  }


  :hover {
    background-color: #934ed1;
  color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
  &.active {
  color: #fff;
    background-color: #934ed1;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;
