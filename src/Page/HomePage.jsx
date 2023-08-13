import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';

import { getCurrentWeatherCoord } from '../API/API-weather';
import Home from '../Components/Home';
import { useError } from '../hooks/useError';

const HomePage = ({ location, setLocation, citySearch, setCitySearch }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [locError, setLocError] = useError(false);

  useEffect(() => {
    if (!location) return;

    getCurrentWeatherCoord(location)
      .then(res => res.data)
      .then(data => setCurrentWeather(data))
      .catch(e => setLocError(true, 'Something went wrong, or the location is wrong'));
  }, [location]);

  return (
    <section>
      <Home
        location={location}
        citySearch={citySearch}
        setLocation={setLocation}
        setCitySearch={setCitySearch}
        currentWeather={currentWeather}
      />
      <Toaster position="top-right" />
    </section>
  );
};

export default HomePage;
