import React from 'react';
import './css/FAQ.css'; // 🔑 Import the CSS file

const FAQ = () => {
    // Array of frequently asked questions and answers
    const faqs = [
        {
            q: "What is the delivery time guarantee?",
            a: "We strive to deliver all orders within 10-20 minutes, depending on the store's proximity and current demand. You can track the order status in real-time on the Order Tracking page."
        },
        {
            q: "What payment options are available?",
            a: "We currently support Cash on Delivery (COD), but integration for popular digital payments (UPI, Credit/Debit cards, Net Banking) is planned for the next release."
        },
        {
            q: "Is there a minimum order value?",
            a: "No, there is generally no minimum order value. However, a small delivery fee may apply to orders below a certain threshold."
        },
        {
            q: "How can I modify or cancel my order?",
            a: "Orders can only be modified or cancelled within the first 60 seconds after placing them, as our fulfillment process starts immediately. Please contact customer support immediately for urgent changes."
        },
        {
            q: "What is your return and refund policy?",
            a: "If a product is delivered damaged, expired, or incorrect, you can request a refund within 2 hours of delivery. Please provide a photo of the item when contacting support through the 'Contact Us' page."
        },
        {
            q: "How do I update my delivery address?",
            a: "You can manage and update your saved addresses in the 'My Account' section. To use a new address for a current order, select it during the checkout process."
        },
    ];

    return (
        <div className="container faq-container">
            <h1 className="section-title">Frequently Asked Questions (FAQ)</h1>
            <p className="faq-subtitle">Quick answers to your most pressing questions about ordering and delivery.</p>

            <div className="faq-list">
                {faqs.map((item, index) => (
                    <div className="faq-item" key={index}>
                        <h2 className="faq-question">Q: {item.q}</h2>
                        <p className="faq-answer">A: {item.a}</p>
                    </div>
                ))}
            </div>

            <div className="support-cta">
                <p>Still have questions? Our support team is ready to help.</p>
                <a href="/contact" className="button faq-contact-button">Contact Customer Support</a>
            </div>
        </div>
    );
};

export default FAQ;