const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Ensure this path is correct

// @route   GET /api/products
// @desc    Get all products, with optional search and category filters
// @access  Public
router.get('/', async (req, res) => {
    try {
        const { search, category } = req.query;
        const filter = {};

        // 1. Handle Category Filter
        if (category) {
            filter.category = category;
        }

        // 2. Handle Search Filter (Case-insensitive name search)
        if (search) {
            // MongoDB regex for case-insensitive partial match
            filter.name = { $regex: search, $options: 'i' }; 
        }

        // Fetch products based on the constructed filter
        const products = await Product.find(filter).sort({ createdAt: -1 }); // Show newest products first
        
        res.json(products);

    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ message: 'Server error while fetching products' });
    }
});

// @route   GET /api/products/:id
// @desc    Get single product by ID
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        
        res.json(product);
    } catch (err) {
        // This catches invalid MongoDB ID format
        console.error('Error fetching single product:', err);
        res.status(500).json({ message: 'Server error or invalid product ID' });
    }
});


module.exports = router;