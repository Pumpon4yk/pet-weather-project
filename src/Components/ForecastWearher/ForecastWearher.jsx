import { Container } from "./ForecastWearher.styled"
import ForecastList from "../ForecastList"
import CardWeather from "../CardWeather"
// import { useState } from "react"

import { makeArrayDaysWeather } from "../../utils/makeArrayDaysWeather"
import {makeMinDataWeather} from "../../utils/makeMinDataWeather"


const ForecastWeather = ({forecastWeather}) => {
  const arrayDaysWeather = makeArrayDaysWeather(forecastWeather.list)
  const arrayMinData = makeMinDataWeather(arrayDaysWeather)
  // console.log("🚀 ~ ForecastWeather ~ arrayMinData:", arrayMinData)
  // console.log("🚀 ~ ForecastWeather ~ arrayDaysweather:", arrayDaysWeather)




  return(
<Container>
  <ForecastList arrayMinData={arrayMinData} />
  <CardWeather/>
</Container>
  )
}

export default ForecastWeather