import React from 'react';
import { Link } from 'react-router-dom';
// 🔑 Import the shared Dashboard CSS
import './css/Dashboard.css'; 

const UserAccount = () => {
  return (
    <div className="container dashboard-container">
      <h2 className="section-title">My Account Home</h2>
      <div className="account-box">
        <p>Welcome to your personal dashboard.</p>
        <p style={{ color: '#6b7280', fontSize: '1rem' }}>This section is for managing your profile, addresses, and settings.</p>
        
        {/* Quick link to Order History */}
        <Link to="/account/orders" className="button small-button" style={{ backgroundColor: '#3b82f6', display: 'inline-block', marginTop: '16px' }}>
          View Your Orders
        </Link>
      </div>
    </div>
  );
};

export default UserAccount;