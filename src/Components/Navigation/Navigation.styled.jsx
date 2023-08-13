import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #934ed1;
`;

export const Nav = styled.nav`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;
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
