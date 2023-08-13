import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../Loader/Loader';
import CurrentCardWeater from "../CurrentCardWeater";

import { Container, ContainerSearch } from './Home.styled';
import SearchWeather from '../SearchWeather';

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
      </ContainerSearch>
      {currentWeather && loc === '/' ?
      <CurrentCardWeater weather={currentWeather} citySearch={citySearch}/> :
      loc === '/' && <Loader/>
      }
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Home;
