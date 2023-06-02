import axios from "axios"
const {VITE_API_WEATHER_KEY} = import.meta.env
const BASE_URL = 'https://api.openweathermap.org/data/2.5'


// const getCity = async (city) => {

//     const resp = await axios(`${BASE_URL}/locations/v1/cities/search?apikey=${API_KEY}&q=${city}`)
//     // return resp
// }

const getCurrentWesather = async(city) =>{  
    const resp = await axios(`${BASE_URL}/weather?q=${city}&appid=${VITE_API_WEATHER_KEY}&units=metric`)
    return resp
};

const getWeatherFiveDay = async (key) => {

    const resp = await axios(`${BASE_URL}/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}`)
    // return resp
}

const getWeatherTwelveHour = async (key) => {

    const resp = await axios(`${BASE_URL}/forecasts/v1/hourly/12hour/${key}?apikey=${API_KEY}`)
    // return resp
}

export {getCurrentWesather, getWeatherFiveDay, getWeatherTwelveHour}

