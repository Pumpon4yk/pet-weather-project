import CurrentCardWeater from "../Components/CurrentCardWeater/CurrentCardWeater";
import { useEffect, useState } from 'react';
import { getCurrentWeatherCoord } from '../API/API-weather';
import toast from 'react-hot-toast';



const Current = ({citySearch, location}) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [locError, setLocError] = useState(false);

  useEffect(() => {
    if (!location) return;

    getCurrentWeatherCoord(location)
      .then(res => res.data)
      .then(data => setCurrentWeather(data))
      .catch(e => setLocError(true));
  }, [location]);

  useEffect(() => {
    if (locError) {
      toast.error('Something went wrong, or the location is wrong');
      setLocError(false);
    }
  }, [locError]);


  return(
    <>
{currentWeather && <CurrentCardWeater weather={currentWeather} citySearch={citySearch}/>}

    </>
  )
}

export default Current;