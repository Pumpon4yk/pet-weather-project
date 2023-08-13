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
import { Toaster } from 'react-hot-toast';

import { sunData } from '../../API/API-sunData';
import { iconCreateByHour } from '../../utils/iconCreate';
import { getDayInWeek } from '../../utils/getDayInWeek';
import { useEffect, useState } from 'react';
import AstronomicalAspects from '../AstronomicalAspects/AstronomicalAspects';
import { useError } from '../../hooks/useError';

const CardWeather = ({ dayWeather: { weather }, location, timezone }) => {
  const [locError, setLocError] = useError(false);
  const [dataTimes, setDataTimes] = useState(null)
  useEffect(() => {

    if (!weather) return;
    sunData(weather[0].dt_txt, location)
      .then(data => setDataTimes(data.results))
      .catch(error => setLocError(true, error.message))

  }, [weather, location])


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

          {dataTimes && <AstronomicalAspects astronomicData={dataTimes} timezone={timezone} />}
        </Wrapper>

      }
      <Toaster position="top-right" />
    </Card>
  );
};

export default CardWeather;
