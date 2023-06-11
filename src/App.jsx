import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import getCity from './API/API-checkIP';

import Layout from './Components/Layout';
import HomePage from './Page/HomePage';

const Current = lazy(() => import('./Page/Current'));
const Forecast = lazy(() => import('./Page/Forecast'));

function App() {
  const [citySearch, setCitySearch] = useState('');
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (!location) {
      getCity().then(({ coord, city }) => {
        setLocation(coord);
        setCitySearch(city);
      });
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
        <Route index element={<HomePage />} />
        <Route
          path="*"
          element={
            <HomePage
              location={location}
              setLocation={setLocation}
              citySearch={citySearch}
              setCitySearch={setCitySearch}
            />
          }
        >
          <Route
            path="current"
            element={<Current citySearch={citySearch} location={location} />}
          />
          <Route
            path="forecast"
            element={<Forecast citySearch={citySearch} location={location} />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
