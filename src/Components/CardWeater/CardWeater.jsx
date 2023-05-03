import { ContainerCard, ContainerTemp, DayTime, DayTitle, DetailTempMax, DetailTempMin, Icon, PrecipitationType, Temperature } from "./CardWeater.styled"
import weather from '../../weather.json'
import changeTemperature from '../../utils/changeTemperature'
import { useEffect, useState } from "react"
const OneDay = weather.DailyForecasts[0]



const CardWeater = () => {
  const [icon, setIcon] = useState(null)
  
  useEffect(()=>{
    const pathIcon = `../../image/icon-weather/${OneDay.Day.Icon.toString().padStart(2, '0')}.png`;
    import(pathIcon).then(icon => setIcon( icon.default))
  }, [])
  

  return(
    <ContainerCard>
    <DayTitle>Today: {OneDay.Date.slice(0, 10)}</DayTitle>
    <ContainerTemp>
      {icon && <Icon src={icon} alt='icon weather'/>}
      <Temperature>
        <DetailTempMax>{changeTemperature(OneDay.Temperature.Maximum.Value)} &#8451;</DetailTempMax>
        /
        <DetailTempMin>{changeTemperature(OneDay.Temperature.Minimum.Value)} &#8451;</DetailTempMin>
      </Temperature>
    </ContainerTemp>

    <DayTime>Day: <PrecipitationType>{OneDay.Day.IconPhrase}</PrecipitationType></DayTime>

    <DayTime>Night: <PrecipitationType>{OneDay.Night.IconPhrase}</PrecipitationType></DayTime>

    </ContainerCard>
  )
}

export default CardWeater