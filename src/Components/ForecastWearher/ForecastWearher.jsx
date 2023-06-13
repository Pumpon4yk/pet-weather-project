import { useState, useEffect, useRef } from 'react';
import { Container, City, Wrapper } from './ForecastWearher.styled';
import ForecastList from '../ForecastList';
import CardWeather from '../CardWeather';
import Clock from '../Clock';

import { makeArrayDaysWeather } from '../../utils/makeArrayDaysWeather';
import { makeMinDataWeather } from '../../utils/makeMinDataWeather';

const ForecastWeather = ({ forecastWeather, citySearch }) => {
  const {
    list,
    city: { timezone },
  } = forecastWeather;
  const arrayDaysWeather = makeArrayDaysWeather(list);
  const arrayMinData = makeMinDataWeather(arrayDaysWeather);

  return (
    <Container>
    <Wrapper>
      <City>{citySearch}</City>
      <Clock timezone={timezone}/>
    </Wrapper>

      <ForecastList arrayMinData={arrayMinData} />
      <CardWeather />
    </Container>
  );
};

export default ForecastWeather;
