import {
  ContainerCard,
  DayTitle,
  CurrentTemp,
  CurrentDate,
  Icon,
  PrecipitationType,
} from './CardWeater.styled';
import weather from '../../weather.json';
import iconCreate from '../../utils/iconCreate';

import formatDate from '../../utils/formatDate';

const [currentDay] = weather;

const CardWeater = () => {
  const icon = iconCreate(currentDay.WeatherIcon);

  return (
    <ContainerCard>
    <DayTitle>Current weather</DayTitle>
      <CurrentDate>
        {formatDate(currentDay.LocalObservationDateTime.slice(0, 10))}
      </CurrentDate>
      {icon && <Icon src={icon} alt="icon weather" />}
      <CurrentTemp>
        {Math.floor(currentDay.Temperature.Metric.Value)} &#8451;
      </CurrentTemp>

      <PrecipitationType>{currentDay.WeatherText}</PrecipitationType>
    </ContainerCard>
  );
};

export default CardWeater;
