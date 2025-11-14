import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
// 🔑 Import the shared Auth CSS
import './css/Auth.css'; 

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_APP_API_URL || 'http://localhost:5000';

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const res = await axios.post(`${API_URL}/api/auth/register`, { 
        email, 
        password,
        role: 'user' // Default to 'user' role
      });

      alert(res.data.message || 'Registration successful! Please log in.');
      navigate('/login');
    } catch (err) {
      const errMsg = err.response?.data?.message || 'Registration failed.';
      console.error("Registration error:", err);
      alert(errMsg);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Create Account</h2>
        <input
          className="input-field"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className="input-field"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          className="input-field"
          type="password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
        <button className="button" onClick={handleRegister}>
          Create Account
        </button>
        <p>
          Already have an account? <Link to="/login" style={{ color: '#10b981', fontWeight: 'bold' }}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;