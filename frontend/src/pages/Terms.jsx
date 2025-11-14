import React from 'react';
import './css/Terms.css'; // 🔑 Import the CSS file

const Terms = () => {
  return (
    <div className="container terms-container">
      <h1 className="section-title">Terms and Conditions of Service</h1>
      <p className="last-updated">Last Updated: October 17, 2025</p>

      <div className="terms-content">
        
        <section>
          <h2 className="terms-heading">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Blinkit Clone application (the "Service"), you agree to be bound by these Terms and Conditions ("Terms"). If you disagree with any part of the terms, you may not access the Service.
          </p>
        </section>

        <section>
          <h2 className="terms-heading">2. Service Scope and Availability</h2>
          <ul className="terms-list">
            <li>
                <strong>Quick Delivery:</strong> We aim for ultra-fast delivery (usually within 10-20 minutes). However, this is an estimate and not a guarantee. Delivery times may vary due to traffic, weather, vendor availability, and other factors.
            </li>
            <li>
                <strong>Product Availability:</strong> All products are subject to availability. If an ordered item is unavailable, we will contact you for a substitution or process a refund.
            </li>
            <li>
                <strong>Age Restriction:</strong> You must be at least 18 years old to use this Service for purchasing certain age-restricted products.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="terms-heading">3. Ordering and Payment</h2>
          <ul className="terms-list">
            <li>
                <strong>Pricing:</strong> Prices are displayed at the time of order placement and include applicable taxes. We reserve the right to change prices at any time without prior notice.
            </li>
            <li>
                <strong>Final Sale:</strong> Once an order is placed and fulfillment begins (typically within 60 seconds), it cannot be cancelled or modified except at our sole discretion.
            </li>
            <li>
                <strong>Payment Methods:</strong> Payment must be made through the methods available on the app (e.g., COD, planned digital payments).
            </li>
          </ul>
        </section>
        
        <section>
            <h2 className="terms-heading">4. User Account and Conduct</h2>
            <p>
                You are responsible for maintaining the confidentiality of your account password and for all activities that occur under your account. You agree not to use the Service for any unlawful purpose or in any way that violates these Terms.
            </p>
        </section>

        <section>
            <h2 className="terms-heading">5. Intellectual Property</h2>
            <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of Blinkit Clone and its licensors.
            </p>
        </section>

      </div>
    </div>
  );
};

export default Terms;