import { useEffect, useState } from 'react';
import { Container, ContainerSearch, ContainerBtn } from './Home.styled';
import CurrentCardWeater from '../CurrentCardWeater/CurrentCardWeater';
import SearchWeather from '../SearchWeather/SearchWeather';
import ForecastWeather from '../ForecastWearher';
import Button from '../Button';
import toast, { Toaster } from 'react-hot-toast';

import {
  getCurrentWeatherCoord,
  getFiveDayWeather,
} from '../../../API/API-weather';
import getCity from '../../../API/API-checkIP';

const Home = () => {
  const [citySearch, setCitySearch] = useState('');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [locError, setLocError] = useState(false);
  const [currentWatchWeather, setCurrentWatchWeather] = useState(true);
  const [forecastWatchWeather, setForecastWatchWeather] = useState(false);

  useEffect(() => {
    if (!location) {
      getCity().then(({ coord, city }) => {
        setLocation(coord);
        setCitySearch(city);
      });
    }

    setTimeout(() => {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude: lat, longitude: lon } = position.coords;

        setLocation({ lat, lon });
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if (!location) return;

    getCurrentWeatherCoord(location)
      .then(res => res.data)
      .then(data => setCurrentWeather(data))
      .catch(e => setLocError(true));
  }, [location]);

  useEffect(() => {
    if (locError) {
      toast.error('Something went wrong, or the location is wrong');
      setLocError(false);
    }
  }, [locError]);

  useEffect(() => {
    if(!forecastWatchWeather) return;
    if (!location) return;

    getFiveDayWeather(location)
      .then(res => res.data)
      .then(data => setForecastWeather(data))
      .catch(e => setLocError(true));
  }, [location, forecastWatchWeather]);

  const changeWatchWeather = type => {
    switch (type) {
      case 'current':
        setCurrentWatchWeather(true);
        setForecastWatchWeather(false);
        break;

      case 'forecast':
        setCurrentWatchWeather(false);
        setForecastWatchWeather(true);
        break;
    }
  };

  return (
    <Container>
    
    <ContainerSearch>

    <SearchWeather
        location={location}
        setLocation={setLocation}
        setCitySearch={setCitySearch}
      />

      <ContainerBtn>
      <Button onClick={() => changeWatchWeather('current')} current={currentWatchWeather} >current</Button>
      <Button onClick={() => changeWatchWeather('forecast')} current={forecastWatchWeather}>on 5 days</Button>
      </ContainerBtn>

    </ContainerSearch>

      {currentWeather && currentWatchWeather && (
        <CurrentCardWeater weather={currentWeather} citySearch={citySearch} />
      )}

      {forecastWatchWeather && forecastWeather && (
        <ForecastWeather forecastWeather={forecastWeather} />
      )}
      <Toaster position="top-right" />
    </Container>
  );
};

export default Home;
