import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Layout from './Components/Layout';
import HomePage from './Page/HomePage';

import getCity from './API/API-checkIP';
import { useError } from './hooks/useError';
import NotFound from './Components/NotFound/NotFound';

const ForecastPage = lazy(() => import('./Page/ForecastPage'));

const App = () => {
  const [citySearch, setCitySearch] = useState('');
  const [location, setLocation] = useState(null);
  const [locError, setLocError] = useError(false);

  useEffect(() => {
    if (!location) {
      getCity().then(({ coord, city }) => {
        setLocation(coord);
        setCitySearch(city);
      })
    }

    setTimeout(() => {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude: lat, longitude: lon } = position.coords;

        setLocation({ lat, lon });
      });
    }, 1000);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <HomePage
              location={location}
              setLocation={setLocation}
              citySearch={citySearch}
              setCitySearch={setCitySearch}
            />
          }
        />
        <Route path="/" element={<HomePage 
              location={location}
              setLocation={setLocation}
              setCitySearch={setCitySearch}
        />}>
          <Route
            path="/forecast"
            element={<ForecastPage citySearch={citySearch} location={location} />}
          />
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  );
};

export default App;
