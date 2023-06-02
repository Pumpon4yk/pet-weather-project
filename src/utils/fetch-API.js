import axios from "axios"
const API_WEATHER_KEY  ="9fe2f0211b2345f30e9aa566a923a403";
const BASE_URL = 'https://api.openweathermap.org/data/2.5'


// const getCity = async (city) => {

//     const resp = await axios(`${BASE_URL}/locations/v1/cities/search?apikey=${API_KEY}&q=${city}`)
//     // return resp
// }

const getCurrentWesather = async(city) =>{  
    const resp = await axios(`${BASE_URL}/weather?q=${city}&appid=${API_WEATHER_KEY}&units=metric`)
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

