import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// 🔑 Import the shared Dashboard CSS
import './css/Dashboard.css'; 

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  const API_URL = import.meta.env.VITE_APP_API_URL || 'http://localhost:5000'; 
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchOrderHistory = async () => {
      if (!token) {
        navigate('/login');
        return;
      }
      try {
        setLoading(true);
        // Uses the authenticated backend route
        const res = await axios.get(`${API_URL}/api/orders/history`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setOrders(res.data);
      } catch (err) {
        console.error('Failed to fetch order history:', err);
        setOrders([]); 
      } finally {
        setLoading(false);
      }
    };

    fetchOrderHistory();
  }, [API_URL, token, navigate]);

  const handleTrackOrder = (orderId) => {
    navigate(`/track/${orderId}`);
  };

  if (loading) {
    return <div className="container dashboard-container"><p>Loading order history...</p></div>;
  }

  return (
    <div className="container dashboard-container">
      <h2 className="section-title">Order History</h2>
      <div className="account-box">
        
        {orders.length === 0 ? (
          <p style={{ color: '#6b7280', fontSize: '1rem' }}>You have no previous orders.</p>
        ) : (
          <div className="space-y-4">
            {orders.map(order => (
              <div key={order._id} className="order-item">
                <div className="order-item-info">
                  <p className="order-id">Order ID: {order._id.substring(0, 10)}...</p>
                  <p>Total: ₹ {order.total.toFixed(2)}</p>
                  <p>Status: <span className="order-status">{order.status}</span></p>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Ordered On: {new Date(order.createdAt).toLocaleDateString()}</p>
                </div>
                {/* Order Tracking Button */}
                <button 
                  onClick={() => handleTrackOrder(order._id)}
                  className="button small-button"
                >
                  Track Order
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;