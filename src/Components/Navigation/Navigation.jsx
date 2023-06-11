import { Header, Link, Nav } from './Navigation.styled';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <Header>
      <Nav>
          <Link to="/current">Home</Link>
      </Nav>
    </Header>
  );
};

export default Navigation;
