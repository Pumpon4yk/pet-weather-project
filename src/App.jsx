import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Components/Layout';
import HomePage from './Page/HomePage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
