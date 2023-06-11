import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Container, ContainerSearch, ContainerBtn } from './Home.styled';
import SearchWeather from '../SearchWeather';
import Button from '../Button';

const Home = ({ setCitySearch, location, setLocation }) => {
  return (
    <Container>
      <ContainerSearch>
        <SearchWeather
          location={location}
          setLocation={setLocation}
          setCitySearch={setCitySearch}
        />

        <ContainerBtn>
          <Button path={'current'}>current</Button>
          <Button path={'forecast'}>on 5 days</Button>
        </ContainerBtn>
      </ContainerSearch>

      <Suspense fallback={<div>loading..</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Home;
