import { Container, ContainerLogo, Header, Link, Nav, TitleLogo } from './Navigation.styled';
import { useLocation } from 'react-router-dom';
import icon from "../../image/icon/icon.png"

const Navigation = () => {
  const location = useLocation();

  return (
    <Header>
      <Container>
        <ContainerLogo>
          <img src={icon} width="32" alt='icon' />
          <TitleLogo>Pump Weather</TitleLogo>
        </ContainerLogo>
        <Nav>
          <Link to="/">Current</Link>
          <Link to="/forecast">Forecast 5 days</Link>
        </Nav>
      </Container>

    </Header>
  );
};

export default Navigation;
