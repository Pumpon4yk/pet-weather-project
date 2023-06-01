import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #2e237e;
  padding: 0 15px;

`;

export const Nav = styled.nav`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 26px;
  margin: 0 auto;

  @media screen and (min-width: 787px){
    width: 757px;

  };

  @media screen and (min-width: 1200px){
    width: 1170px;

  };
`;

export const Link = styled(NavLink)`
  color: #5736a3;
  font-size: 18px;
  padding: 10px;

  border-radius: 10px;
  text-align: center;
  :hover {
    background-color: #FDDA0D;
  }
  &.active {
    background-color: #FDDA0D;
  }
`;
