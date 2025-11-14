const express = require('express');
const router = express.Router();
const Vendor = require('../models/Vendor');
const authenticate = require('../middleware/authenticate');

// Create Store
router.post('/store', authenticate, async (req, res) => {
  if (req.user.role !== 'vendor') return res.status(403).json({ message: 'Not authorized' });

  const { storeName, latitude, longitude } = req.body;
  try {
    const vendor = new Vendor({
      userId: req.user.id,
      storeName,
      // MongoDB stores coordinates as [longitude, latitude]
      location: { type: 'Point', coordinates: [parseFloat(longitude), parseFloat(latitude)] },
    });
    await vendor.save();
    res.json({ message: 'Store created' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create store', error: err.message });
  }
});

// Find Nearby Vendors (Requires latitude and longitude query params)
router.get('/nearby', async (req, res) => {
  const { lat, lng } = req.query;
  // Ensure both are provided
  if (!lat || !lng) {
      return res.status(400).json({ message: 'Missing latitude or longitude.' });
  }
  
  try {
    const vendors = await Vendor.find({
      location: {
        $near: {
          $geometry: { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] },
          $maxDistance: 5000, // Search within 5km radius
        },
      },
    }).limit(10); // Limit to 10 nearest vendors

    // You might want to populate vendor data with user/store info here
    res.json(vendors);

  } catch (err) {
    console.error('Geospatial query error:', err);
    res.status(500).json({ message: 'Failed to find nearby vendors' });
  }
});

module.exports = router;