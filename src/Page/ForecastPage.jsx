import { useEffect, useState } from 'react';

import ForecastWeather from '../Components/ForecastWearher/ForecastWearher';
import { getFiveDayWeather } from '../API/API-weather';

const Forecast = ({ location, citySearch }) => {
  const [forecastWeather, setForecastWeather] = useState(null);
  const [locError, setLocError] = useState(false);

  useEffect(() => {
    if (!location) return;

    getFiveDayWeather(location)
      .then(res => res.data)
      .then(data => setForecastWeather(data))
      .catch(e => setLocError(true));
  }, [location]);

  useEffect(() => {
    if (locError) {
      toast.error('Something went wrong, or the location is wrong');
      setLocError(false);
    }
  }, [locError]);
  

  return (
    <>
      {forecastWeather && <ForecastWeather forecastWeather={forecastWeather} citySearch={citySearch} location={location}/>}
    </>
  );
};

export default Forecast;
