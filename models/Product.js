const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  info: {
    name: String,
    dimensions: String,
    weight: String,
    faceDimensions: String,
    designContinuity: String,
    thickness: String,
    color: String,
    price: Number,
    photo: String
  },
  tags: {
    priceRange: String,
    brand: String,
    color: String,
    thickness: String,
    faceDimensions: String,
    designContinuity: String
  }
});

module.exports = mongoose.model('Product', productSchema);