import React, { useState } from 'react';
import './css/ContactUs.css'; // 🔑 Import the CSS file

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would send this data to an API endpoint here.
        console.log('Form Submitted:', formData);
        alert('Thank you for contacting us! We will get back to you soon.');
        
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="container contact-container">
            <h1 className="section-title">Get in Touch</h1>
            <p className="contact-subtitle">
                Have a question, feedback, or a partnership inquiry? We're here to help!
            </p>

            <div className="contact-grid">
                
                {/* 1. Contact Form */}
                <div className="contact-form-card">
                    <h2>Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        
                        <button type="submit" className="button contact-submit-button">
                            Submit Inquiry
                        </button>
                    </form>
                </div>

                {/* 2. Contact Info */}
                <div className="contact-info-card">
                    <h2>Contact Information</h2>
                    
                    <div className="info-item">
                        <span className="info-label">Customer Support:</span>
                        <a href="mailto:support@blinkitclone.com" className="info-detail">support@blinkitclone.com</a>
                    </div>
                    
                    <div className="info-item">
                        <span className="info-label">Partnerships:</span>
                        <a href="mailto:partners@blinkitclone.com" className="info-detail">partners@blinkitclone.com</a>
                    </div>

                    <div className="info-item">
                        <span className="info-label">Phone:</span>
                        <span className="info-detail">+91 1234 567 890 (Mon-Sat, 9am-6pm)</span>
                    </div>
                    
                    <div className="info-address">
                        <span className="info-label">Our Main Office:</span>
                        <p className="info-detail">
                            Blink Clone Headquarters<br/>
                            123, Quick Delivery Road,<br/>
                            Innovation City, State, 10001
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;