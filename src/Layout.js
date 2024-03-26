// Layout.js
import React from 'react';
import Sidebar from './dashboard/Sidebar';
import Header from "./components/common/Header"
import OurClients from "./components/common/OurClients"
import Footer from "./components/common/Footer"
import Testimonials from "./components/common/Testimonials"
import Stats from "./components/common/Stats"
import MarketPlace from './components/pages/MarketPlace';
import Newsletter from './components/common/Newsletter'
import { Outlet } from 'react-router-dom';
// import Home from "./components/pages/Home"
// import Reports from "./components/pages/Reports"
import ScrollToTop from './components/common/ScrollToTop'; // Import the ScrollToTop component
const Layout = () => {
  return (
    <div>
      <ScrollToTop /> 
      <Header />
      
      <div>

        <div >
          <Outlet /> {/* Use Outlet to render nested child routes */}
        </div>
      </div>
      {/* <MarketPlace /> */}
      <Stats />
      <Testimonials />
      <OurClients />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Layout;
