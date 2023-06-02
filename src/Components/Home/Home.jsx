import { useEffect, useState } from 'react';
import { Container } from './Home.styled';
import CardWeater from '../CardWeater/CardWeater';
import SearchWeather from '../SearchWeather/SearchWeather';

import {getCurrentWesather,} from '../../utils/fetch-API';


const Home = () => {
  const [sitySearch, setSitySearch] = useState('gdynia');
  const [currentWeather, setCurrentWeather] = useState(null);

  // useEffect(() => {
  //   if (!sitySearch) return;

  //   getCity(sitySearch)
  //   .then(res => res.data[0])
  //   .then(data => {
  //     setSityCode(data.Key)
  //     setOfficialNameCity(`${data.EnglishName}, ${data.Country.EnglishName}`)
  //   })
  //   .catch(err => console.log(err))

  // }, [sitySearch]);


  useEffect(() => {
    if (!sitySearch) return;

    getCurrentWesather(sitySearch)
    .then(res => res.data)
    .then(data => setCurrentWeather(data))
    .catch(err => console.log(err))

  }, [sitySearch]);

  return (
    <Container>
      <SearchWeather setLocation={setSitySearch} />
      {currentWeather &&
        <CardWeater weather={currentWeather}/>}
    </Container>
  );
};

export default Home;
