import {
  Card,
  Wrapper,
  CurrentDay,
  CurrentDate,
  Item,
  List,
  ListData,
  ItemData,
  Icon,
  DateWrapper
} from './CardWeather.styled';
import Clock from '../Clock';

import { iconCreateByHour } from '../../utils/iconCreate';

import { getDayInWeek } from '../../utils/getDayInWeek';

const CardWeather = ({ dayWeather: { weather }, location }) => {
  return (
    <Card>
    
    {
  weather && 
  <Wrapper>
<DateWrapper>
<CurrentDay>{getDayInWeek(weather[0].dt_txt)}</CurrentDay>
  <CurrentDate>{weather[0].dt_txt.split(' ')[0].slice(5).split('-').reverse().join('.')}</CurrentDate>

</DateWrapper>

      <List>
      
        <Item>
          <ListData>
            <ItemData>Hour</ItemData>
            {weather &&
              weather.map(e => (
                <ItemData key={e.dt}>
                  {e.dt_txt.split(' ')[1].slice(0, 5)}
                </ItemData>
              ))}
          </ListData>
        </Item>

        <Item>
          <ListData>
            <ItemData> </ItemData>
            {weather &&
              weather.map(e => (
                <ItemData key={e.dt}>
                  <Icon
                    src={iconCreateByHour(e.weather[0].id, e.dt_txt, location)}
                    alt="icon weather"
                  />
                </ItemData>
              ))}
          </ListData>
        </Item>

        <Item>
          <ListData>
            <ItemData>Temp</ItemData>
            {weather &&
              weather.map(e => (
                <ItemData key={e.dt}>
                  {Math.floor(e.main.temp)} &#8451;
                </ItemData>
              ))}
          </ListData>
        </Item>

        <Item>
          <ListData>
            <ItemData>Feels like</ItemData>
            {weather &&
              weather.map(e => (
                <ItemData key={e.dt}>
                  {Math.floor(e.main.feels_like)} &#8451;
                </ItemData>
              ))}
          </ListData>
        </Item>

        <Item>
          <ListData>
            <ItemData>Wind</ItemData>
            {weather &&
              weather.map(e => (
                <ItemData key={e.dt}>{Math.floor(e.wind.speed)} m/c</ItemData>
              ))}
          </ListData>
        </Item>

        <Item>
          <ListData>
            <ItemData>Humidity</ItemData>
            {weather &&
              weather.map(e => (
                <ItemData key={e.dt}>{Math.floor(e.main.humidity)} %</ItemData>
              ))}
          </ListData>
        </Item>

        <Item>
          <ListData>
            <ItemData>Pressure</ItemData>
            {weather &&
              weather.map(e => (
                <ItemData key={e.dt}>
                  {Math.floor(e.main.pressure)} hPa
                </ItemData>
              ))}
          </ListData>
        </Item>
      </List>

    </Wrapper>

}

    </Card>
  );
};

export default CardWeather;
