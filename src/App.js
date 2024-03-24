import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Reports from './components/pages/Reports';
import Company from './components/pages/Company';
import MarketPlace from './components/pages/MarketPlace';
import Contact from './components/Contact';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import AddReport from './dashboard/AddReport';
import DashboardHome from './dashboard/DashboardHome';
import AllReports from './dashboard/AllReports'
import Payments from './dashboard/Payments'
import Profile from './dashboard/Profile'
import Settings from './dashboard/Settings'
import Analytics from './dashboard/Analytics';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Define nested routes inside the Routes component */}
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="reports" element={<Reports />} />
          <Route path="company" element={<Company />} />
          <Route path="marketplace" element={<MarketPlace />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<DashboardHome />} />
          <Route path="add-reports" element={<AddReport />} />
          <Route path="payments" element={<Payments />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="list-reports" element={<AllReports />} />
          <Route path="analytics" element={<Analytics />} />

          

        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
