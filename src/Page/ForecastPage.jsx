import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import ForecastWeather from '../Components/ForecastWearher/ForecastWearher';
import { getFiveDayWeather } from '../API/API-weather';
import { useError } from '../hooks/useError';

const ForecastPage = ({ location, citySearch }) => {
  const [forecastWeather, setForecastWeather] = useState(null);
  const [locError, setLocError] = useError(false);

  useEffect(() => {
    if (!location) return;

    getFiveDayWeather(location)
      .then(res => res.data)
      .then(data => setForecastWeather(data))
      .catch(e => setLocError(true, 'Something went wrong, or the location is wrong'));
  }, [location]);

  return (
    <>
      {forecastWeather && <ForecastWeather forecastWeather={forecastWeather} citySearch={citySearch} location={location}/>}
    </>
  );
};

export default ForecastPage;
