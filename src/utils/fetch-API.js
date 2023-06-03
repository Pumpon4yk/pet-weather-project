import axios from "axios"
const API_WEATHER_KEY  ="9fe2f0211b2345f30e9aa566a923a403";
const BASE_URL = 'https://api.openweathermap.org/data/2.5'


const getCurrentWesather = async(city) =>{  
    const resp = await axios(`${BASE_URL}/weather?q=${city}&appid=${API_WEATHER_KEY}&units=metric`)
    return resp
};

const getCurrentWesatherCoord = async ({lat, lon}) => {
    const resp = await axios(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_WEATHER_KEY}&units=metric`)
    return resp
}



export {getCurrentWesather, getCurrentWesatherCoord}

