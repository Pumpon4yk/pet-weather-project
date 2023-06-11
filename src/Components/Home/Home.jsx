import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';

import CurrentCardWeater from "../CurrentCardWeater";

import { Container, ContainerSearch, ContainerBtn } from './Home.styled';
import SearchWeather from '../SearchWeather';
import Button from '../Button';

const Home = ({ setCitySearch, location, citySearch, setLocation, currentWeather }) => {
  const loc = useLocation().pathname;


  return (
    <Container>
      <ContainerSearch>
        <SearchWeather
          location={location}
          setLocation={setLocation}
          setCitySearch={setCitySearch}
        />

        <ContainerBtn>
          <Button path={"/"}>current</Button>
          <Button path={'forecast'}>on 5 days</Button>
        </ContainerBtn>
      </ContainerSearch>
      {currentWeather && loc === '/' && <CurrentCardWeater weather={currentWeather} citySearch={citySearch}/>}
      <Suspense fallback={<div>loading..</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Home;
