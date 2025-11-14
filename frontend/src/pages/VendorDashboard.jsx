import React, { useState } from 'react';
import axios from 'axios';
// 🔑 Import the shared Dashboard CSS
import './css/Dashboard.css'; 

const VendorDashboard = () => {
  const [storeName, setStoreName] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const API_URL = import.meta.env.VITE_APP_API_URL || 'http://localhost:5000';

  const handleCreateStore = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        alert('Please log in as a vendor.');
        return;
    }
    
    try {
      await axios.post(`${API_URL}/api/vendor/store`, { storeName, latitude, longitude }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Store created!');
    } catch (err) {
      console.error(err);
      alert('Failed to create store. Check if you are logged in as a vendor.');
    }
  };

  return (
    <div className="container dashboard-container">
      <h2 className="section-title">Vendor Dashboard</h2>
      <p style={{ marginBottom: '15px' }}>Create your quick commerce store.</p>
      <input
        className="input-field"
        placeholder="Store Name"
        value={storeName}
        onChange={e => setStoreName(e.target.value)}
      />
      <input
        className="input-field"
        placeholder="Latitude"
        value={latitude}
        onChange={e => setLatitude(e.target.value)}
      />
      <input
        className="input-field"
        placeholder="Longitude"
        value={longitude}
        onChange={e => setLongitude(e.target.value)}
      />
      <button className="button action-button" onClick={handleCreateStore}>
        Create Store
      </button>
    </div>
  );
};

export default VendorDashboard;