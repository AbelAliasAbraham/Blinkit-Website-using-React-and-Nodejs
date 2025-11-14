import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useParams } from 'react-router-dom';
// 🔑 Import the component-specific CSS
import './css/OrderTracking.css'; 

const OrderTracking = () => {
  const { orderId } = useParams();
  const [status, setStatus] = useState('Placed');

  const API_URL = import.meta.env.VITE_APP_API_URL || 'http://localhost:5000';

  useEffect(() => {
    // Connect to the socket server
    const socket = io(API_URL);
    
    // Listen for real-time order updates
    socket.on('orderUpdate', (order) => {
      // Only update if the received order ID matches the current one
      if (order._id === orderId) {
        setStatus(order.status);
      }
    });

    // Cleanup function: disconnect the socket when the component unmounts
    return () => socket.disconnect();
  }, [orderId, API_URL]);

  return (
    <div className="tracking-container container">
      <h2 className="section-title">Order Tracking</h2>
      <p className="tracking-status">Current Status: **{status}**</p>
    </div>
  );
};

export default OrderTracking;