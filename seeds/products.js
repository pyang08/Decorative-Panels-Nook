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
      designContinuity: 'all_sided',
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
      designContinuity: 'all_sided'
    }
  },
  {
    info: {
      name: 'sam fretwork panel',
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
      name: 'anam fretwork panel',
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
      name: 'CompuArt fretwork panel',
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
      priceRange: '<250',
      brand: 'compuart',
      color: 'Unfinished',
      thickness: '8',
      faceDimensions: '1220x813',
      designContinuity: 'all_sided'
    }
  },
  {
    info: {
      name: 'CompuArt fretwork panel',
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
      priceRange: '<250',
      brand: 'compuart',
      color: 'Unfinished',
      thickness: '8',
      faceDimensions: '1220x813',
      designContinuity: 'all_sided'
    }
  },
  {
    info: {
      name: 'CompuArt fretwork panel',
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
      priceRange: '<250',
      brand: 'compuart',
      color: 'Unfinished',
      thickness: '8',
      faceDimensions: '1220x813',
      designContinuity: 'all_sided'
    }
  },
  {
    info: {
      name: 'CompuArt fretwork panel',
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
      priceRange: '<250',
      brand: 'compuart',
      color: 'Unfinished',
      thickness: '8',
      faceDimensions: '1220x813',
      designContinuity: 'all_sided'
    }
  },
  {
    info: {
      name: 'CompuArt fretwork panel',
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
      name: 'CompuArt fretwork panel',
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
      name: 'CompuArt fretwork panel',
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