const mongoose = require('mongoose');
const Product = require('../models/Product');

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/productlist");


const products = [
  {
    info: {
      name: 'CompuArt fretwork panel',
      dimensions: '1220 x 813 x 8.0 mm',
      weight: '4 kg',
      faceDimensions: '1220 x 813 mm',
      designContinuity: 'All-sided',
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
      faceDimensions: '1220x813',
      designContinuity: 'four_sided'
    }
  },
  {
    info: {
      name: 'sam fretwork panel',
      dimensions: '1220 x 813 x 10.0 mm',
      weight: '4 kg',
      faceDimensions: '1220 x 813 mm',
      designContinuity: 'length_side',
      thickness: '10 mm',
      color: 'Unfinished',
      price: 150,
      photo: '/img/CompuArt fretwork panel1.jpg'
    },
    tags: {
      priceRange: '<250',
      brand: 'sam',
      color: 'black',
      thickness: '256',
      faceDimensions: '1220x813',
      designContinuity: 'length_side'
    }
  },
  {
    info: {
      name: 'anam fretwork panel',
      dimensions: '1220 x 813 x 16.0 mm',
      weight: '8 kg',
      faceDimensions: '1220 x 813 mm',
      designContinuity: 'width_side',
      thickness: '16 mm',
      color: 'Unfinished',
      price: 300,
      photo: '/img/CompuArt fretwork panel1.jpg'
    },
    tags: {
      priceRange: '250-500',
      brand: 'anam',
      color: 'Unfinished',
      thickness: '16',
      faceDimensions: '1220x813',
      designContinuity: 'width_side'
    }
  },
  {
    info: {
      name: 'CompuArt fretwork panel',
      dimensions: '1220 x 813 x 8.0 mm',
      weight: '4 kg',
      faceDimensions: '1220 x 813 mm',
      designContinuity: 'All-sided',
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
      faceDimensions: '1220x813',
      designContinuity: 'four_sided'
    }
  },
  {
    info: {
      name: 'CompuArt fretwork panel',
      dimensions: '1220 x 813 x 8.0 mm',
      weight: '4 kg',
      faceDimensions: '1220 x 813 mm',
      designContinuity: 'All-sided',
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
      faceDimensions: '1220x813',
      designContinuity: 'four_sided'
    }
  },
  {
    info: {
      name: 'CompuArt fretwork panel',
      dimensions: '1220 x 813 x 8.0 mm',
      weight: '4 kg',
      faceDimensions: '1220 x 813 mm',
      designContinuity: 'All-sided',
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
      faceDimensions: '1220x813',
      designContinuity: 'four_sided'
    }
  },
  {
    info: {
      name: 'CompuArt fretwork panel',
      dimensions: '1220 x 813 x 8.0 mm',
      weight: '4 kg',
      faceDimensions: '1220 x 813 mm',
      designContinuity: 'All-sided',
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
      faceDimensions: '1220x813',
      designContinuity: 'four_sided'
    }
  },
  {
    info: {
      name: 'CompuArt fretwork panel',
      dimensions: '1220 x 813 x 8.0 mm',
      weight: '4 kg',
      faceDimensions: '1220 x 813 mm',
      designContinuity: 'All-sided',
      thickness: '8 mm',
      color: 'Unfinished',
      price: 50,
      photo: '/img/CompuArt fretwork panel1.jpg'
    },
    tags: {
      priceRange: '<100',
      brand: 'compuart',
      color: 'Unfinished',
      thickness: '8',
      faceDimensions: '1220x813',
      designContinuity: 'four_sided'
    }
  },
  {
    info: {
      name: 'CompuArt fretwork panel',
      dimensions: '1220 x 813 x 8.0 mm',
      weight: '4 kg',
      faceDimensions: '1220 x 813 mm',
      designContinuity: 'All-sided',
      thickness: '8 mm',
      color: 'Unfinished',
      price: 175,
      photo: '/img/CompuArt fretwork panel1.jpg'
    },
    tags: {
      priceRange: '150-200',
      brand: 'compuart',
      color: 'Unfinished',
      thickness: '8',
      faceDimensions: '1220x813',
      designContinuity: 'four_sided'
    }
  },
  {
    info: {
      name: 'CompuArt fretwork panel',
      dimensions: '1220 x 813 x 8.0 mm',
      weight: '4 kg',
      faceDimensions: '1220 x 813 mm',
      designContinuity: 'All-sided',
      thickness: '8 mm',
      color: 'Unfinished',
      price: 350,
      photo: '/img/CompuArt fretwork panel1.jpg'
    },
    tags: {
      priceRange: '250>',
      brand: 'compuart',
      color: 'Unfinished',
      thickness: '8',
      faceDimensions: '1220x813',
      designContinuity: 'four_sided'
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