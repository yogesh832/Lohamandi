// Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import MobileStickyCTA from './components/MobileStickyCTA';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100 relative pb-28">
      <Header />
      <Outlet />
      <MobileStickyCTA />
    </div>
  );
};

export default Layout;
