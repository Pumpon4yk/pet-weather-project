// http://dataservice.accuweather.com/locations/v1/cities/search?apikey=PvGcLwAYFHukpTSehNBBp2VlXO8KwF9O&q=gdynia
import axios from "axios"
const API_KEY = 'PvGcLwAYFHukpTSehNBBp2VlXO8KwF9O'
const BASE_URL = 'http://dataservice.accuweather.com'


const getCity = async (city) => {

    const resp = await axios(`${BASE_URL}/locations/v1/cities/search?apikey=${API_KEY}&q=${city}`)
    return resp
}

const getWeatherFiveDay = async (key) => {

    const resp = await axios(`${BASE_URL}/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}`)
    return resp
}

const getWeatherTwelveHour = async (key) => {

    const resp = await axios(`${BASE_URL}/forecasts/v1/hourly/12hour/${key}?apikey=${API_KEY}`)
    return resp
}

export {getCity, getWeatherFiveDay, getWeatherTwelveHour}

