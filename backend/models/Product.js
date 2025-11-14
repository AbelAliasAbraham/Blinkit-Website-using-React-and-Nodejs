const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    // Core Fields
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true }, // Stores the path to the uploaded image
    stock: { type: Number, required: true, default: 0 }, // 🔑 NEW: Added stock field

    // Metadata
    createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;