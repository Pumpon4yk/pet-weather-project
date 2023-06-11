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
} from './CurrentCardWeater.styled';

import {iconCreate} from '../../utils/iconCreate';

import { formatDateDay, formatDateTime } from '../../utils/formatDate';

const CurrentCardWeater = ({ weather, citySearch }) => {
  const {weather: iconData, coord, timezone, sys, main, wind} = weather;
  const [currentTime, setCurrentTime] = useState(
    formatDateTime(weather.timezone)
  );

  const icon = iconCreate(iconData[0].id, coord);

  const startTimer = () => {
    const timer = setInterval(() => {
      setCurrentTime(formatDateTime(timezone));
    }, 1000);
    return timer;
  };

  useEffect(() => {
    let timer = startTimer();

    return () => {
      clearInterval(timer);
    };
  }, [timezone]);

  return (
    <ContainerCard>
      <Country>{sys.country}</Country>
      <City>{citySearch}</City>
      <CurrentDateDay>{formatDateDay(timezone)}</CurrentDateDay>
      <CurrentDatetime>{currentTime}</CurrentDatetime>
      {icon && <Icon src={icon} alt="icon weather" />}
      <CurrentTemp>{Math.round(main.temp)} &#8451;</CurrentTemp>
      <FeelsText>Feels like</FeelsText>
      <FeelsTemp>{Math.round(main.feels_like)} &#8451;</FeelsTemp>

      <Line />

      <DataList>

        <DataListItem>
          Wind:
          <DataItem>{Math.round(wind.speed)} m/c</DataItem>
        </DataListItem>

        <DataListItem>
          Humidity:
          <DataItem>{main.humidity} %</DataItem>
        </DataListItem>

        <DataListItem>
          Pressure:
          <DataItem>{main.pressure} hPa</DataItem>
        </DataListItem>
      </DataList>
    </ContainerCard>
  );
};

export default CurrentCardWeater;
