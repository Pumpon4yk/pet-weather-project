import { useEffect, useState } from 'react';
import { Container } from './Home.styled';
import CardWeater from '../CardWeater/CardWeater';
import SearchWeather from '../SearchWeather/SearchWeather';

import {getCurrentWesather, getCurrentWesatherCoord} from '../../utils/fetch-API';
import getCity from '../../utils/checkIP';
import {formatDateTime} from '../../utils/formatDate';

const Home = () => {
  const [citySearch, setCitySearch] = useState("");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [locError, setLocError] = useState(false);

  useEffect(() => {
    if (!citySearch && !location) {
      getCity()
      .then(capital => setCitySearch(capital))
    }
      
    setTimeout(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude: lat, longitude: lon } = position.coords;
  
          setLocation({ lat, lon });
          
        },
        (error) => {

          setLocError(true)
        }
      ) 
    }, 1000)

  }, [])

  useEffect(() => {
    if (!citySearch) return;

    getCurrentWesather(citySearch)
    .then(res => res.data)
    .then(data => setCurrentWeather(data))
    .catch(err => console.log(err))

  }, [citySearch]);

  useEffect(() => {
    if(!location || citySearch) return;

    getCurrentWesatherCoord(location)
    .then(res => res.data)
    .then(data => setCurrentWeather(data))
    .catch(err => console.log(err))
  }, [location]);

  return (
    <Container>
      <SearchWeather setLocation={setCitySearch} />
      {currentWeather &&
        <CardWeater weather={currentWeather}/>}
        {/* <ModalPosition isOpen={isOpen} setISOpen={setISOpen}/> */}
    </Container>
  );
};

export default Home;
