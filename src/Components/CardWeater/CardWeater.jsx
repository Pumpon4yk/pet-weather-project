import { useEffect, useState } from 'react';
import {
  ContainerCard,
  City,
  CurrentTemp,
  FeelsText,
  FeelsTemp,
  CurrentDateDay,
  Country,
  Icon,
  Line,
  DataList,
  DataListItem,
  DataItem,
  CurrentDatetime,
} from './CardWeater.styled';

import iconCreate from '../../utils/iconCreate';

import { formatDateDay, formatDateTime } from '../../utils/formatDate';

const CardWeater = ({ weather }) => {
  const [currentTime, setCurrentTime] = useState(
    formatDateTime(weather.timezone)
  );

  const icon = iconCreate(weather.weather[0].id, weather.dt, weather.coord);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(formatDateTime(weather.timezone));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [currentTime]);

  return (
    <ContainerCard>
      <Country>{weather.sys.country}</Country>
      <City>{weather.name}</City>
      <CurrentDateDay>{formatDateDay(weather.dt)}</CurrentDateDay>
      <CurrentDatetime>{currentTime}</CurrentDatetime>
      {icon && <Icon src={icon} alt="icon weather" />}
      <CurrentTemp>{Math.round(weather.main.temp)} &#8451;</CurrentTemp>
      <FeelsText>Feels like</FeelsText>
      <FeelsTemp>{Math.round(weather.main.feels_like)} &#8451;</FeelsTemp>

      <Line />

      <DataList>

        <DataListItem>
          Wind:
          <DataItem>{Math.round(weather.wind.speed)} m/c</DataItem>
        </DataListItem>

        <DataListItem>
          Humidity:
          <DataItem>{weather.main.humidity} %</DataItem>
        </DataListItem>

        <DataListItem>
          Pressure:
          <DataItem>{weather.main.pressure} hPa</DataItem>
        </DataListItem>
      </DataList>
    </ContainerCard>
  );
};

export default CardWeater;
