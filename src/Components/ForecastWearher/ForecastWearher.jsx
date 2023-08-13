import { useState, useEffect, useCallback } from 'react';
import { Container, City, Wrapper } from './ForecastWearher.styled';
import ForecastList from '../ForecastList';
import CardWeather from '../CardWeather';
import Clock from '../Clock';
import { FcClock } from 'react-icons/fc';
import { makeArrayDaysWeather } from '../../utils/makeArrayDaysWeather';
import { makeMinDataWeather } from '../../utils/makeMinDataWeather';


const ForecastWeather = ({ forecastWeather, citySearch, location }) => {
  const {
    list,
    city: { timezone },
  } = forecastWeather;

  const arrayDaysWeather = useCallback(makeArrayDaysWeather(list), [
    forecastWeather,
  ]);

  const arrayMinData = makeMinDataWeather(arrayDaysWeather);

  const [idDay, setIdDay] = useState(arrayDaysWeather[1].id);
  const [dayWeather, setDayWeather] = useState({});

  useEffect(() => {
    if (!idDay) return;

    const dataDay = arrayDaysWeather.filter(el => el.id === idDay);
    setDayWeather(...dataDay);
  }, [idDay]);

  return (
    <div>
      <Wrapper>
        <City>{citySearch}</City>
        <Container>
          <FcClock size={32} />
          <Clock timezone={timezone} />
        </Container>
      </Wrapper>

      <ForecastList arrayMinData={arrayMinData} setIdDay={setIdDay} idDay={idDay} />
      {idDay && dayWeather && <CardWeather dayWeather={dayWeather} location={location} timezone={timezone} />}
    </div>
  );
};

export default ForecastWeather;
