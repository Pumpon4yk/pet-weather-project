import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

import { Loader } from './Loader/Loader';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
