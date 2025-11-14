// frontend/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 
import './css/Footer.css'; // Don't forget to import the new CSS

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-main">
      
      {/* 1. Newsletter/CTA Section */}
      <div className="footer-newsletter-section">
        <div className="container">
          <h3>Stay Updated! Get Exclusive Deals.</h3>
          <p className="footer-text">The best deals delivered straight to your inbox.</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="newsletter-input" 
              aria-label="Email subscription"
              required 
            />
            <button type="submit" className="newsletter-button button">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* 2. Main Footer Grid Container */}
      <div className="container footer-grid-container"> 
        <div className="footer-grid">
          
          {/* Column 1: Company Info */}
          <div>
            <h4 className="company-name">Blinkit</h4>
            <p className="footer-text">
              The ultimate quick commerce experience. Get everything you need delivered in minutes.
            </p>
          </div>

          {/* Column 2: Quick Links ⬅️ UPDATED */}
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li> 
              <li><Link to="/careers" className="footer-link">Careers</Link></li>
              {/* 🔑 NEW LINK */}
              <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li> 
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div>
            <h4>Help & Support</h4>
            <ul className="footer-links">
              <li><Link to="/faq" className="footer-link">FAQ</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li><Link to="/terms" className="footer-link">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <h4>Contact Us</h4>
            <p className="footer-text">Email: support@blinkit.com</p>
            <p className="footer-text">Phone: +91 1234 567 890</p>
            
            <h4 style={{marginTop: '15px'}}>Follow Us</h4>
            <div className="footer-socials">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="footer-social-icon" />
              </a> 
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="footer-social-icon" />
              </a> 
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="footer-social-icon" />
              </a> 
            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Bar: Copyright */}
      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copyright">
            &copy; {currentYear} **Blink Commerce Private Limited**. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;