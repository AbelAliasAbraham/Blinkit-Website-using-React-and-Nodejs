// frontend/src/pages/HomePage.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../redux/cartSlice';

// 🔑 Confirmed CSS import path: '../css/HomePage.css'
import './css/HomePage.css'; 

// Image imports
import NewBannerImage from '../assets/image.png'; 
import BannerImage from '../assets/image1.png'; 
import BannerImage1 from '../assets/image2.png'; 
import BannerImage2 from '../assets/image3.png'; 

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(''); 
  const [category, setCategory] = useState(''); 
    
  const dispatch = useDispatch();
  const API_URL = import.meta.env.VITE_APP_API_URL || 'http://localhost:5000';

  const categories = [ // List of categories for navigation
    'All', 
    'Dairy & Eggs', 
    'Fruits & Veg', 
    'Snacks & Munchies',
    'Cold Drinks & Juices',
    'Instant & Frozen Food',
    'Paan Corner', 
    'Bakery & Biscuits',
    'Pet Supplies',
    'Home & Kitchen',
    'Baby Care',
    'Pharmacy'
  ];

  // Effect to fetch products when search or category changes
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = `${API_URL}/api/products`;
        
        // Construct query parameters
        const params = new URLSearchParams();
        if (search) {
          params.append('search', search);
        }
        if (category) {
          params.append('category', category);
        }
        
        // Only append params if they exist
        if (params.toString()) {
          url = `${url}?${params.toString()}`;
        }
        
        const res = await axios.get(url);
        setProducts(res.data);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };

    fetchProducts();
  }, [API_URL, search, category]); 

  const handleAddToCart = (product) => {
    dispatch(addItem({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    }));
  };

  return (
    <div className="container homepage-container">
      
      
      {/* 🟢 1. Banner/Hero Section */}
      <section className="banner-section">
        {/* Main large banner */}
        <Link to="/products?category=Paan Corner" className="large-banner">
          <img 
            src={NewBannerImage} 
            alt="Big Offer Banner" 
            className="large-banner-image"
          />
        </Link>
        
        {/* Small banners row */}
        <div className="small-banners-row">
          <Link to="/products?category=Pharmacy" className="small-banner">
            <img 
              src={BannerImage} 
              alt="Small Offer Banner 1" 
              className="small-banner-image"
            />
          </Link>
          <Link to="/products?category=Pet Supplies" className="small-banner">
            <img 
              src={BannerImage1} 
              alt="Small Offer Banner 2" 
              className="small-banner-image"
            />
          </Link>
          <Link to="/products?category=Baby Care" className="small-banner">
            <img 
              src={BannerImage2} 
              alt="Small Offer Banner 2" 
              className="small-banner-image"
            />
          </Link>
        </div>
      </section>

      {/* 🟢 3. Category Navigation (Filter) Section */}
      <h2 className="section-title">Shop by Category</h2>
      <div 
        className="filters-container"
      >
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-button ${category === (cat === 'All' ? '' : cat) ? 'active' : ''}`}
            onClick={() => {
              setCategory(cat === 'All' ? '' : cat);
            }}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* End Category Navigation Section */}


      {/* 🟢 Product Grid (Compact Style) */}
      <div className="product-grid">
        {products.map(product => (
          <div key={product._id} className="product-card">
            <Link to={`/product/${product._id}`}>
              <img 
                src={`${API_URL}/uploads/${product.image}`} 
                alt={product.name} 
                className="product-image"
                onError={(e) => { 
                  // Fallback if image path is wrong or missing (e.g., using seed data)
                  // Note: In production, ensure all seed data images are uploaded to the S3 bucket 
                  // or locally in the 'uploads' folder for this to work.
                  e.target.onerror = null; // Prevents infinite loop
                  e.target.src = product.image; // Use the absolute URL from seed data as fallback
                }}
              />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-category">{product.category}</p>
              <p className="product-price">₹ {product.price.toFixed(2)}</p>
            </Link>
            
            <button 
              className="add-to-cart-button"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {/* End Product Grid */}
      
      {/* Display message if no products are found */}
      {products.length === 0 && (
        <p className="no-products-message">
          No products found for the current selection.
        </p>
      )}
    </div>
  );
};

export default HomePage;