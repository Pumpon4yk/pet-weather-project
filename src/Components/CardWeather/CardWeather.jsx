import { Card, Item, List, ListData, ItemData, Icon } from "./CardWeather.styled"
import {iconCreateByHour} from '../../utils/iconCreate';


const CardWeather = ({dayWeather: {weather}, location}) => {
 
  return(
<Card>
<List>

<Item>
  <ListData>
  <ItemData>Hour</ItemData>
  {weather && weather.map(e => (<ItemData key={e.dt}>{e.dt_txt.split(" ")[1].split(":")[0]}</ItemData>))}
</ListData>
</Item>

<Item>
  <ListData>
  <ItemData> </ItemData>
  {weather && weather.map(e => (<ItemData key={e.dt}><Icon src={iconCreateByHour(e.weather.id, e.dt, location)} alt="icon weather"/></ItemData>))}
</ListData>
</Item>

<Item>
  <ListData>
  <ItemData>Temp</ItemData>
  {weather && weather.map(e => (<ItemData key={e.dt}>{Math.floor(e.main.temp)} &#8451;</ItemData>))}
</ListData>
</Item>

<Item>
  <ListData>
  <ItemData>Feels like</ItemData>
  {weather && weather.map(e => (<ItemData key={e.dt}>{Math.floor(e.main.feels_like)} &#8451;</ItemData>))}
</ListData>
</Item>

<Item>
  <ListData>
  <ItemData>wind</ItemData>
  {weather && weather.map(e => (<ItemData key={e.dt}>{Math.floor(e.wind.speed)} m/c</ItemData>))}
</ListData>
</Item>

<Item>
  <ListData>
  <ItemData>Humidity</ItemData>
  {weather && weather.map(e => (<ItemData key={e.dt}>{Math.floor(e.main.humidity)} %</ItemData>))}
</ListData>
</Item>

<Item>
  <ListData>
  <ItemData>Pressure</ItemData>
  {weather && weather.map(e => (<ItemData key={e.dt}>{Math.floor(e.main.pressure)} hPa</ItemData>))}
</ListData>
</Item>

</List>

</Card>
  )
}

export default CardWeather