import React from 'react';
import { Link } from 'react-router-dom';
import './css/AboutUs.css'; // The CSS link is here

const AboutUs = () => {
  return (
    <div className="container mt-8 about-us-container">
      <h2 className="section-title text-3xl font-bold text-center mb-8">About Blinkit</h2>

      <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
        
        {/* Our Mission */}
        <section>
          <h3 className="text-2xl font-semibold text-green-600 mb-3">Our Mission</h3>
          <p className="text-gray-700">
            Our mission is simple: to bring you everything you need, from groceries and essentials to gourmet food and fresh produce, in a matter of minutes. We leverage cutting-edge technology and a network of local stores to ensure **ultra-fast delivery** without compromising on quality or selection. We're here to save you time, one quick delivery at a time.
          </p>
        </section>

        {/* The Quick Commerce Promise */}
        <section>
          <h3 className="text-2xl font-semibold text-green-600 mb-3">The Quick Commerce Promise</h3>
          <p className="text-gray-700">
            We understand the modern pace of life. Waiting hours for a delivery is no longer an option. Our model is built around **instant gratification** and hyper-local efficiency. When you order from us, our promise is speed, reliability, and accuracy, making us the true partner for your last-minute needs and daily errands.
          </p>
        </section>

        {/* What We Offer - WITH CARDS */}
        <section>
          <h3 className="text-2xl font-semibold text-green-600 mb-3">What We Offer</h3>
          
          {/* Grid Container */}
          <div className="offer-grid"> 
            
            <div className="offer-card">
              {/* The star is added by CSS on this class: offer-card-text */}
              <p className="offer-card-text">**Wide Range of Products:** Thousands of products across all essential categories.</p>
            </div>
            
            <div className="offer-card">
              <p className="offer-card-text">**Minutes-Fast Delivery:** Leveraging a network of dedicated delivery partners.</p>
            </div>
            
            <div className="offer-card">
              <p className="offer-card-text">**Quality Guaranteed:** Freshness and quality checks on all produce and perishable goods.</p>
            </div>
            
            <div className="offer-card">
              <p className="offer-card-text">**24/7 Availability:** Shop whenever you need, day or night.</p>
            </div>
          </div>
        </section>
        {/* END What We Offer */}

        {/* Join Our Team */}
        <section className="border-t pt-6">
          <h3 className="text-2xl font-semibold text-green-600 mb-3">Want to Join Us?</h3>
          <p className="text-gray-700 mb-4">
            We are always looking for passionate individuals to join our mission, whether it's in technology, operations, or as a dedicated delivery partner.
          </p>
          <Link to="/careers" className="button bg-blue-500 hover:bg-blue-600 inline-block">
            View Career Opportunities
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;