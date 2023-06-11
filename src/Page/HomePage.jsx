import { Toaster } from 'react-hot-toast';

import Home from '../Components/Home';

const HomePage = ({ location, setLocation, setCitySearch }) => {

  return (
    <section>
      <Home
        location={location}
        setLocation={setLocation}
        setCitySearch={setCitySearch}
      />
      <Toaster position="top-right" />
    </section>
  );
};

export default HomePage;
