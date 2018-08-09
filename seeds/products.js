const mongoose = require('mongoose');
const Product = require('../models/Product');

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/productlist");


const products = [
  {
    info: {
      name: 'CompuArt fretwork panel NT-14',
      dimensions: '1220 x 813 x 8.0 mm',
      weight: '4 kg',
      faceDimensions: '1220 x 813 mm',
      designContinuity: 'all_sided',
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
      designContinuity: 'all_sided'
    }
  },
  {
    info: {
      name: 'sam fretwork panel NT-16',
      dimensions: '2439 x 1220 x 16.0 mm',
      weight: '8 kg',
      faceDimensions: '2439 x 1220 mm',
      designContinuity: 'length_side',
      thickness: '16 mm',
      color: 'Unfinished',
      price: 125,
      photo: '/img/CompuArt fretwork panel5.jpg'
    },
    tags: {
      priceRange: '100-150',
      brand: 'sam',
      color: 'black',
      thickness: '16',
      faceDimensions: '2439x1220',
      designContinuity: 'length_side'
    }
  },
  {
    info: {
      name: 'anam fretwork panel NT-33',
      dimensions: '1220 x 813 x 16.0 mm',
      weight: '8 kg',
      faceDimensions: '1220 x 813 mm',
      designContinuity: 'all_sided',
      thickness: '16 mm',
      color: 'Unfinished',
      price: 200,
      photo: '/img/CompuArt fretwork panel6.jpg'
    },
    tags: {
      priceRange: '150-200',
      brand: 'anam',
      color: 'Unfinished',
      thickness: '16',
      faceDimensions: '1220x813',
      designContinuity: 'all_sided'
    }
  },
  {
    info: {
      name: 'CompuArt fretwork panel NT-74',
      dimensions: '610 x 610 x 25.0 mm',
      weight: '4 kg',
      faceDimensions: '610 x 610 mm',
      designContinuity: 'all_sided',
      thickness: '25 mm',
      color: 'Unfinished',
      price: 175,
      photo: '/img/CompuArt fretwork panel7.jpg'
    },
    tags: {
      priceRange: '150-200',
      brand: 'compuart',
      color: 'Unfinished',
      thickness: '25',
      faceDimensions: '610x610',
      designContinuity: 'all_sided'
    }
  },
  {
    info: {
      name: 'CompuArt fretwork panel NT-64',
      dimensions: '1220 x 813 x 8.0 mm',
      weight: '4 kg',
      faceDimensions: '1220 x 813 mm',
      designContinuity: 'all_sided',
      thickness: '8 mm',
      color: 'Unfinished',
      price: 50,
      photo: '/img/CompuArt fretwork panel3.jpg'
    },
    tags: {
      priceRange: '<100',
      brand: 'compuart',
      color: 'Unfinished',
      thickness: '8',
      faceDimensions: '1220x813',
      designContinuity: 'all_sided'
    }
  },
  {
    info: {
      name: 'CompuArt fretwork panel NT-17',
      dimensions: '610 x 610 x 8.0 mm',
      weight: '4 kg',
      faceDimensions: '610 x 610 mm',
      designContinuity: 'all_sided',
      thickness: '8 mm',
      color: 'Unfinished',
      price: 75,
      photo: '/img/CompuArt fretwork panel8.jpg'
    },
    tags: {
      priceRange: '<250',
      brand: 'compuart',
      color: 'Unfinished',
      thickness: '8',
      faceDimensions: '610x610',
      designContinuity: 'all_sided'
    }
  },
  {
    info: {
      name: 'CompuArt fretwork panel NT-22',
      dimensions: '610 x 610 x 10.0 mm',
      weight: '6 kg',
      faceDimensions: '610 x 610 mm',
      designContinuity: 'all_sided',
      thickness: '10 mm',
      color: 'Unfinished',
      price: 100,
      photo: '/img/CompuArt fretwork panel9.jpg'
    },
    tags: {
      priceRange: '<250',
      brand: 'compuart',
      color: 'Unfinished',
      thickness: '10',
      faceDimensions: '610x610',
      designContinuity: 'all_sided'
    }
  },
  {
    info: {
      name: 'CompuArt fretwork panel NT-24',
      dimensions: '1220 x 813 x 10.0 mm',
      weight: '10 kg',
      faceDimensions: '1220 x 813 mm',
      designContinuity: 'all_sided',
      thickness: '10 mm',
      color: 'Unfinished',
      price: 175,
      photo: '/img/CompuArt fretwork panel10.jpg'
    },
    tags: {
      priceRange: '150-200',
      brand: 'compuart',
      color: 'Unfinished',
      thickness: '10',
      faceDimensions: '1220x813',
      designContinuity: 'all_sided'
    }
  },
  {
    info: {
      name: 'CompuArt fretwork panel NT-34',
      dimensions: '610 x 610 x 16.0 mm',
      weight: '6 kg',
      faceDimensions: '610 x 610 mm',
      designContinuity: 'all_sided',
      thickness: '16 mm',
      color: 'Unfinished',
      price: 175,
      photo: '/img/CompuArt fretwork panel4.jpg'
    },
    tags: {
      priceRange: '150-200',
      brand: 'compuart',
      color: 'Unfinished',
      thickness: '16',
      faceDimensions: '610x610',
      designContinuity: 'all_sided'
    }
  },
  {
    info: {
      name: 'CompuArt fretwork panel NT-44',
      dimensions: '2439 x 1220 x 16.0 mm',
      weight: '10 kg',
      faceDimensions: '2439 x 1220 mm',
      designContinuity: 'all_sided',
      thickness: '16 mm',
      color: 'Unfinished',
      price: 350,
      photo: '/img/CompuArt fretwork panel2.jpg'
    },
    tags: {
      priceRange: '250>',
      brand: 'compuart',
      color: 'Unfinished',
      thickness: '16',
      faceDimensions: '2439x1220',
      designContinuity: 'all_sided'
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