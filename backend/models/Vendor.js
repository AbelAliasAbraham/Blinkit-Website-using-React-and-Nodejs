const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  storeName: { type: String, required: true },
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number],
  },
});

vendorSchema.index({ location: '2dsphere' }); // Essential for geospatial queries

module.exports = mongoose.model('Vendor', vendorSchema);