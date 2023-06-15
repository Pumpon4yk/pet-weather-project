import { useState, useEffect, useCallback } from 'react';
import { Container, City, Wrapper } from './ForecastWearher.styled';
import ForecastList from '../ForecastList';
import CardWeather from '../CardWeather';
import Clock from '../Clock';

import { makeArrayDaysWeather } from '../../utils/makeArrayDaysWeather';
import { makeMinDataWeather } from '../../utils/makeMinDataWeather';

const ForecastWeather = ({ forecastWeather, citySearch, location }) => {
  const [idDay, setIdDay] = useState(null);
  const [dayWeather, setDayWeather] = useState({});
  const {
    list,
    city: { timezone },
  } = forecastWeather;
  const arrayDaysWeather = useCallback(makeArrayDaysWeather(list), [
    forecastWeather,
  ]);
  const arrayMinData = makeMinDataWeather(arrayDaysWeather);

  useEffect(() => {
    if (!idDay) return;

    const dataDay = arrayDaysWeather.filter(el => el.id === idDay);
    setDayWeather(...dataDay);
  }, [idDay]);

  return (
    <Container>
      <Wrapper>
        <City>{citySearch}</City>
        <Clock timezone={timezone} />
      </Wrapper>

      <ForecastList arrayMinData={arrayMinData} setIdDay={setIdDay} />
      {idDay && dayWeather && <CardWeather dayWeather={dayWeather} location={location}/>}
    </Container>
  );
};

export default ForecastWeather;
