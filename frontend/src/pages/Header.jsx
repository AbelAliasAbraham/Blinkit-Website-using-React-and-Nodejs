import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart, FaUserCircle, FaChevronDown } from 'react-icons/fa';
// 🔑 Import the component-specific CSS
import './css/Header.css'; 

const getAuthStatus = () => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    return { loggedIn: !!token, role: role };
};

const getDashboardLink = (role) => {
    switch (role) {
        case 'admin':
            return '/admin';
        case 'vendor':
            return '/vendor';
        case 'user':
        default:
            return '/account';
    }
};

const Header = () => {
  const { items } = useSelector(state => state.cart);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const { loggedIn, role } = getAuthStatus(); 
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const dashboardLink = getDashboardLink(role);
  const buttonText = role ? `${role.charAt(0).toUpperCase() + role.slice(1)} Account` : 'My Account'; 
  const dashboardText = role ? `Go to ${role.charAt(0).toUpperCase() + role.slice(1)} Dashboard` : 'My Account Home';

  const handleLogout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      setIsDropdownOpen(false);
      navigate('/login');
  };

  useEffect(() => {
      const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
              setIsDropdownOpen(false);
          }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header>
      <div className="container header-content">
        <Link to="/" className="logo">Blinkit</Link>
        
        <div className="header-right">
          {/* Search bar is simplified as a placeholder input */}
          <input type="text" placeholder="Search products..." className="search-bar" />

          <Link to="/cart" className="cart-button">
            <FaShoppingCart />
            Cart ({totalItems})
          </Link>

          {loggedIn ? (
              <div className="account-menu" ref={dropdownRef}>
                  <button 
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                      className="account-button"
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                  >
                      <FaUserCircle />
                      {buttonText}
                      <FaChevronDown style={{ fontSize: '0.8rem', marginLeft: '5px' }} />
                  </button>
                  {isDropdownOpen && (
                      <div className="account-dropdown">
                          {/* 1. Dashboard Link (Routes to /admin, /vendor, or /account) */}
                          <Link 
                            to={dashboardLink} 
                            onClick={() => setIsDropdownOpen(false)}
                            className="dropdown-item"
                          >
                              {dashboardText}
                          </Link>
                          
                          {/* 2. 🔑 Order History Link (Routes specifically to /account/orders) */}
                          <Link 
                            to="/account/orders" // <-- Corrected destination
                            onClick={() => setIsDropdownOpen(false)}
                            className="dropdown-item"
                          >
                            Order History
                          </Link>

                          {/* 3. Logout Button */}
                          <button onClick={handleLogout} className="logout-button-dropdown dropdown-item">
                              Logout
                          </button>
                      </div>
                  )}
              </div>
          ) : (
              <Link to="/login" className="login-button">
                  Login
              </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;