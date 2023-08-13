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
} from './CurrentCardWeater.styled';
import Clock from '../Clock';

import { iconCreate } from '../../utils/iconCreate';

import { formatDateDay } from '../../utils/formatDate';


const CurrentCardWeater = ({ weather, citySearch }) => {
  const { weather: iconData, coord, timezone, sys, main, wind } = weather;

  const icon = iconCreate(iconData[0].id, coord);

  const stylesClock = {
    position: "absolute",
    top: "15px",
    left: "50%",
    transform: "translateX(-50%)"
  }

  return (
    <ContainerCard>
      <Country>{sys.country}</Country>
      <CurrentDateDay >{formatDateDay(timezone)}</CurrentDateDay>

      <Clock styles={stylesClock} timezone={timezone} />
      <City>{citySearch}</City>

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
