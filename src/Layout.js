// Layout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/common/Header';
import Newsletter from './components/common/Newsletter';
import Footer from './components/common/Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const isRestrictedRoute = ['/login', '/signup', '/dashboard','/analytics' ,'/createreport','/add-reports','/payments','/profile','/list-reports','/settings'].includes(location.pathname);

  return (
    <>
      {/* Render Header only for non-restricted routes */}
      {!isRestrictedRoute && <Header />}
      
      {/* Render children (page content) */}
      {children}

      {/* Render Newsletter only for non-restricted routes */}
      {!isRestrictedRoute && <Newsletter />}

      {/* Render Footer only for non-restricted routes */}
      {!isRestrictedRoute && <Footer />}
    </>
  );
};

export default Layout;
