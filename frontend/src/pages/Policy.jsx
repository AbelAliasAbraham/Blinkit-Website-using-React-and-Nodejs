import React from 'react';
// 🔑 Updated path to the renamed CSS file
import './css/Policy.css'; 

// 🔑 Renamed Component
const Policy = () => {
  return (
    <div className="container privacy-policy-container">
      <h1 className="section-title">Privacy Policy for Blinkit</h1>
      <p className="last-updated">Last Updated: October 17, 2025</p>

      <div className="policy-content">
        
        <section>
          <h2 className="policy-heading">1. Introduction</h2>
          <p>
            Welcome to the Blinkit Clone application (the "Service"). This Privacy Policy explains what information we collect, how we use it, and your choices regarding your information. By using the Service, you agree to the collection and use of information in accordance with this policy.
          </p>
        </section>

        <section>
          <h2 className="policy-heading">2. Information We Collect</h2>
          <p>We collect the following types of information when you use our Service:</p>
          <ul className="policy-list">
            <li>
                <strong>Personal Data:</strong> Email address, password (encrypted), and phone number when you register.
            </li>
            <li>
                <strong>Order Data:</strong> Details of products purchased, order history, and total value.
            </li>
            <li>
                <strong>Location Data:</strong> Your precise delivery address and current location (via GPS, required for finding nearby vendors and ensuring quick delivery).
            </li>
            <li>
                <strong>Usage Data:</strong> Information on how the Service is accessed and used (e.g., product views, click streams, time spent).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="policy-heading">3. How We Use Your Information</h2>
          <p>We use the collected data for various purposes:</p>
          <ul className="policy-list">
            <li>To provide and maintain the Service, including processing orders and facilitating delivery.</li>
            <li>To manage your account and provide you with customer support.</li>
            <li>To monitor the usage of the Service and improve product offerings.</li>
            <li>To detect, prevent, and address technical issues or fraud.</li>
            <li>To notify you about changes to our Service.</li>
          </ul>
        </section>
        
        <section>
            <h2 className="policy-heading">4. Sharing Your Data</h2>
            <p>
                We only share your Personal Data when necessary for the operation of the Service:
            </p>
            <ul className="policy-list">
                <li>
                    <strong>Delivery Partners/Vendors:</strong> We share your **delivery address**, **phone number**, and **order details** with the vendor and delivery personnel to complete your order.
                </li>
                <li>
                    <strong>Legal Requirements:</strong> If required to do so by law or in response to valid requests by public authorities.
                </li>
            </ul>
        </section>

        <section>
            <h2 className="policy-heading">5. Security of Data</h2>
            <p>
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
        </section>

      </div>
    </div>
  );
};

export default Policy;