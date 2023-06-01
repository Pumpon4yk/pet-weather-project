import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import HashLoader from 'react-spinners/HashLoader';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Suspense
        fallback={
          null
          // <HashLoader
          //   color="#471CA9"
          //   size={300}
          //   style={{ marginLeft: 'auto' }}
          // />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
