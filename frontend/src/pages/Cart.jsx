import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../redux/cartSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// 🔑 Import the component-specific CSS
import './css/Cart.css'; 

const Cart = () => {
  const { items, total } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  
  const API_URL = import.meta.env.VITE_APP_API_URL || 'http://localhost:5000';

  useEffect(() => {
    // Geolocation check for nearby vendors
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await axios.get(`${API_URL}/api/vendor/nearby?lat=${latitude}&lng=${longitude}`);
          // console.log('Nearby vendors:', res.data);
        } catch (err) {
          console.error("Error fetching nearby vendors:", err);
        }
      });
    }
  }, [API_URL]);

  const handleCheckout = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in to place an order.');
      navigate('/login');
      return;
    }
    
    if (!address) {
        alert('Please enter a delivery address.');
        return;
    }

    try {
      const orderData = {
        items: items.map(item => ({ productId: item.id, quantity: item.quantity, price: item.price })),
        total: total,
        shippingAddress: address,
        paymentMethod: 'Cash on Delivery',
      };
      
      const res = await axios.post(`${API_URL}/api/orders`, orderData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert(`Order Placed Successfully! Order ID: ${res.data.order._id}`);
      dispatch(clearCart());
      navigate(`/track/${res.data.order._id}`);

    } catch (err) {
      console.error("Checkout error:", err);
      alert('Checkout failed due to server error.');
    }
  };

  return (
    <div className="cart-container container">
      <h2 className="section-title">Your Cart</h2>
      {items.length === 0 ? (
        <p style={{ color: '#6b7280' }}>Your cart is empty</p>
      ) : (
        <>
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <div>
                <h3 className="cart-item-name">{item.name} x {item.quantity}</h3>
                <p className="cart-item-price">₹ {(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button
                className="remove-button"
                onClick={() => dispatch(removeItem(item.id))}
              >
                Remove
              </button>
            </div>
          ))}
          
          {/* Summary and Checkout Box */}
          <div className="cart-summary">
            <p className="cart-total">Subtotal: ₹ {total.toFixed(2)}</p>
            <input
              className="input-field"
              placeholder="Delivery Address"
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
            <p style={{ marginBottom: '10px', fontSize: '0.9rem', color: '#333' }}>Payment Method: **Cash on Delivery (COD)**</p>
            <button
              className="button checkout-button"
              onClick={handleCheckout}
              disabled={!address || items.length === 0}
            >
              Place Order (COD)
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;