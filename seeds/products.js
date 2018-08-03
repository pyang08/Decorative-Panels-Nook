const mongoose = require('mongoose');
const Product = require('../models/Product');

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/productslist");


const products = [
  {
    info: {
      name: 'CompuArt fretwork panel',
      dimensions: '1220 x 813 x 8.0 mm',
      weight: '4 kg',
      faceDimensions: '1080 x 1920 pixels',
      designContinuity: 'yes',
      thickness: '8 mm',
      color: 'Unfinished',
      price: 50,
      photo: '/img/CompuArt fretwork panel1.jpg'
    },
    tags: {
      priceRange: '<250',
      brand: 'compuart',
      color: 'Unfinished',
      thickness: '8',
      faceDimensions: '1080x1920',
      designContinuity: 'yes'
    }
  }
  
];

const seedProducts = () => {
  Product.remove({}, (err) => {
    if(err) {
      console.log(err);
    }
    console.log('PRODUCTS REMOVED');
    products.forEach((product) => {
      Product.create(product, (err, createdProduct) => {
        if(err) {
          console.log(err);
        } else {
          console.log('PRODUCT CREATED');
          createdProduct.save();
        }
      })
    })
  })
}

module.exports = seedProducts;