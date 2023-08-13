import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import HashLoader from 'react-spinners/HashLoader';

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
      {currentWeather && loc === '/' && <CurrentCardWeater weather={currentWeather} citySearch={citySearch}/>}
      <Suspense
        fallback={
          <HashLoader
            color="#934ed1"
            size={200}
            style={{ marginLeft: 'auto' }}
          />
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Home;
