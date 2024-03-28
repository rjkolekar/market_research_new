// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './dashboard/Dashboard';
import AddReport from './dashboard/AddReport';
import Payments from './dashboard/Payments';
import DashboardReports from './dashboard/DashboardReports';
import Profile from './dashboard/Profile';
import Settings from './dashboard/Settings';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Reports from './components/pages/Reports';
import Company from './components/pages/Company';
import MarketPlace from './components/pages/MarketPlace';
import Contact from './components/Contact';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import PrivateComponent from './PrivateComponent';
import Disclaimer from './components/pages/Disclaimer';
import Faqs from './components/pages/Faqs'
import TermsAndConditions from './components/pages/TermsAndConditions';
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
          {/* Define nested routes */}
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="reports" element={<Reports />} />
          <Route path="company" element={<Company />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="termsandconditons" element={<TermsAndConditions />} />


          <Route path="marketplace" element={<MarketPlace />} />
          <Route path="contact" element={<Contact />} />
        </Route>
       {/* <Route path="dashboard/*" element={<PrivateComponent />}> */}
          {/* Nested routes for dashboard components */}
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="add-reports" element={<AddReport />} />
          <Route path="payments" element={<Payments />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="/dashboard-reports" element={<DashboardReports />} />
        {/* </Route> */}
        <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Signin />} />
      </Routes>
    </Router>
  );
};

export default App;
