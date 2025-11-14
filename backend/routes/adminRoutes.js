const express = require('express');
const router = express.Router();
const multer = require('multer');
const XLSX = require('xlsx');
const Product = require('../models/Product');
const authenticate = require('../middleware/authenticate');

// Multer setup for file uploads
const upload = multer({ dest: 'uploads/' });

router.post('/products/upload', authenticate, upload.single('file'), async (req, res) => {
  // Authorization check
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Not authorized' });

  try {
    const workbook = XLSX.readFile(req.file.path);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const products = XLSX.utils.sheet_to_json(sheet);
    
    // Insert products into database
    await Product.insertMany(products);
    res.json({ message: 'Products uploaded successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Upload failed', error: err.message });
  }
});

module.exports = router;