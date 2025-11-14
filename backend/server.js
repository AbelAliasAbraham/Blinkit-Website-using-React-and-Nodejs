// server.js (Main Backend Entry File)

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); 
const path = require('path'); // Core Node.js module for handling file paths

// Load environment variables from .env file
dotenv.config();

// Import Routes
const vendorRoutes = require('./routes/vendorRoutes');      // Assuming you have this
const adminRoutes = require('./routes/adminRoutes');    // For product creation, etc.
const productRoutes = require('./routes/productRoutes'); // The new product listing routes

const app = express();

// === 1. MIDDLEWARE ===
app.use(cors()); // Allow cross-origin requests from the frontend
app.use(express.json()); // To parse application/json bodies (for login, register, etc.)

// === 2. STATIC FILE SERVING (CRITICAL for Images) ===
// Make the 'uploads' folder publicly accessible. 
// Files stored at /uploads/image-path.jpg can be accessed via http://localhost:5000/uploads/image-path.jpg
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); 

// === 3. DATABASE CONNECTION ===
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/blinkit_clone';
mongoose.connect(MONGO_URI)
    .then(() => console.log('🟢 MongoDB connected successfully'))
    .catch(err => console.error('🔴 MongoDB connection error:', err));


// === 4. ROUTE INTEGRATION ===

app.use('/api/admin', adminRoutes); // Handles POST /api/admin/product
app.use('/api/products', productRoutes); // Handles GET /api/products and GET /api/products/:id

// Optional: Basic root route check
app.get('/', (req, res) => {
    res.send('API is running...');
});

// === 5. SERVER START ===
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`));