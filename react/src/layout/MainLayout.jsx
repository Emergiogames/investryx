import React from 'react';
import { Outlet , useLocation } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SideNavBar from '../components/sidebar/SideNavBar';

function MainLayout() {
  const location =  useLocation()
  const shouldShowSideNav = !['/user-profile', '/settings', '/saved', '/Profile1'].includes(location.pathname) && !location.pathname.startsWith('/view-post/');

  return (
    <>
      <Header />
      <div className={`${shouldShowSideNav ? 'flex' : ''}`}>
        {shouldShowSideNav && <SideNavBar />}
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
