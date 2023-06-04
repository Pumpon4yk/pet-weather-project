import {
  ContainerCard,
  City,
  CurrentTemp,
  FeelsText,
  FeelsTemp,
  CurrentDate,
  Country,
  Icon,
  Line,
  DataList,
  DataListItem,
  DataItem,
} from './CardWeater.styled';

import iconCreate from '../../utils/iconCreate';

import formatDate from '../../utils/formatDate';

const CardWeater = ({ weather }) => {

  const icon = iconCreate(weather.weather[0].id, weather.dt, weather.coord);

  return (
    <ContainerCard>
      <Country>{weather.sys.country}</Country>
      <City>{weather.name}</City>
      <CurrentDate>{formatDate(weather.dt)}</CurrentDate>
      {icon && <Icon src={icon} alt="icon weather" />}
      <CurrentTemp>{Math.round(weather.main.temp)} &#8451;</CurrentTemp>
      <FeelsText>Feels like</FeelsText>
      <FeelsTemp>{Math.round(weather.main.feels_like)} &#8451;</FeelsTemp>

      <Line />

      <DataList>
        {/* <DataListItem>Temperature: 
        <div>
          <DataItem>max</DataItem>
        <DataItem>{Math.round(weather.main.temp_max)} &#8451;</DataItem>
        </div>
        <div>
        <DataItem>min</DataItem>
        <DataItem>{Math.round(weather.main.temp_min)} &#8451;</DataItem>
        </div>
        
      </DataListItem> */}

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
