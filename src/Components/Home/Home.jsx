import { useEffect, useState } from 'react';
import { Container } from './Home.styled';
import CardWeater from '../CardWeater/CardWeater';
import SearchWeather from '../SearchWeather/SearchWeather';

import {getCity,getCurrentWesather,} from '../../utils/fetch-API';


const Home = () => {
  const [sitySearch, setSitySearch] = useState('gdynia');
  const [officialNameCity, setOfficialNameCity] = useState('');
  const [sityCode, setSityCode] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    if (!sitySearch) return;

    getCity(sitySearch)
    .then(res => res.data[0])
    .then(data => {
      setSityCode(data.Key)
      setOfficialNameCity(`${data.Country.EnglishName}, ${data.Country.LocalizedName}`)
    })
    .catch(err => console.log(err))

  }, [sitySearch]);


  useEffect(() => {
    if (!sityCode) return;

    getCurrentWesather(sityCode)
    .then(res => res.data)
    .then(data => setCurrentWeather(data))
    .catch(err => console.log(err))

  }, [sityCode]);

  return (
    <Container>
      <SearchWeather setLocation={setSitySearch} />
      {currentWeather ?
       <CardWeater weather={currentWeather} officialNameCity={officialNameCity}/>:
       <h3>Sorry problem with server</h3>}
    </Container>
  );
};

export default Home;
