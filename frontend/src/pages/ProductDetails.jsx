import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { FaShoppingCart } from 'react-icons/fa'; 
// 🔑 Import the component-specific CSS
import './css/ProductDetails.css'; 

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Use VITE environment variable for the API URL
    const API_URL = import.meta.env.VITE_APP_API_URL || 'http://localhost:5000';

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                // Fetch product details from the backend
                const res = await axios.get(`${API_URL}/api/products/${id}`);
                setProduct(res.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch product details.');
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id, API_URL]);

    const handleAddToCart = () => {
        if (product) {
            // Add quantity: 1 by default
            dispatch(addItem({ 
                id: product._id, 
                name: product.name, 
                price: product.price, 
                quantity: 1 
            }));
            alert(`${product.name} added to cart!`);
        }
    };

    // Helper function to render sections only if content exists
    const renderSection = (title, content, isList = false) => {
        if (content && (typeof content === 'string' ? content.trim() !== '' : content.length > 0)) {
            return (
                <div className="detail-section">
                    <h3>{title}</h3>
                    {isList && Array.isArray(content) ? (
                        <ul>
                            {content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{content}</p>
                    )}
                </div>
            );
        }
        return null;
    };

    if (loading) return <div className="container" style={{paddingTop: '30px'}}>Loading product details...</div>;
    if (error) return <div className="container text-red-600" style={{paddingTop: '30px'}}>{error}</div>;
    if (!product) return <div className="container" style={{paddingTop: '30px'}}>Product not found.</div>;

    // The image path must be constructed using the backend URL
    const imageUrl = product.image.startsWith('http') 
        ? product.image 
        : `${API_URL}/uploads/${product.image}`;

    return (
        <div className="container details-container">
            
            {/* 1. PRODUCT HEADER SECTION (LEFT/RIGHT LAYOUT) */}
            <div className="details-wrapper">
                {/* Image (LEFT SIDE: flex: 1) */}
                <div className="details-image-container">
                    <img src={imageUrl} alt={product.name} className="details-image" />
                </div>
                
                {/* Core Info (RIGHT SIDE: flex: 2) */}
                <div className="details-info">
                    <h1 className="details-title">{product.name}</h1>
                    <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                    <p className="details-price">₹ {product.price.toFixed(2)}</p>
                    <button className="button" onClick={handleAddToCart}>
                        <FaShoppingCart style={{ marginRight: '8px' }} />
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* 2. DETAILED SPECIFICATIONS SECTION */}
            <div className="details-content-container">
                <h2 className="section-title">Product Specifications</h2>
                
                {renderSection('Composition', product.composition)}
                
                {/* Renders as a list based on isList=true */}
                {renderSection('Available Types/Variants', product.types, true)} 
                
                {renderSection('Nutritional Values/Highlights', product.nutritionalValues)}
                
                {renderSection('Suggested Uses', product.uses)}
                
                {renderSection('Key Benefits', product.benefits)}

                {/* FAQ Section */}
                {product.faqs && product.faqs.length > 0 && (
                    <div className="detail-section">
                        <h3>Frequently Asked Questions</h3>
                        {product.faqs.map((faq, index) => (
                            <div key={index}>
                                <p className="faq-question">{faq.question}</p>
                                <p className="faq-answer">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;