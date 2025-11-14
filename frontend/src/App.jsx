import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout and Common Components (Check these paths!)
import Header from './pages/Header.jsx'; 
import Footer from './pages/Footer.jsx'; 

// Page Components (Check these paths!)
import HomePage from './pages/HomePage.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx'; 
import Cart from './pages/Cart.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import OrderTracking from './pages/OrderTracking.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import VendorDashboard from './pages/VendorDashboard.jsx';
import OrderHistory from './pages/OrderHistory.jsx'; 
import UserAccount from './pages/UserAccount.jsx'; 
import AboutUs from './pages/AboutUs.jsx'; 
import Policy from './pages/Policy.jsx'; // 🔑 THE BLOCKED IMPORT
import FAQ from './pages/FAQ.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Terms from './pages/Terms.jsx';
import Careers from './pages/Careers.jsx';

const App = () => {
  return (
    <>
      <Header /> 
      
      <main className="flex-grow"> 
          <Routes>
              {/* Core Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              
              {/* Information Pages */}
              <Route path="/about" element={<AboutUs />} />
              <Route path="/privacy" element={<Policy />} /> 
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/careers" element={<Careers />} />

              {/* User Account Routes */}
              <Route path="/account" element={<UserAccount />} /> 
              <Route path="/account/orders" element={<OrderHistory />} /> 
              <Route path="/track/:orderId" element={<OrderTracking />} />
              
              {/* Dashboard Routes */}
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/vendor" element={<VendorDashboard />} />

          </Routes>
      </main>
      
      <Footer />
    </>
  );
};

export default App;