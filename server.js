const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const catalogRoutes = require('./routes/catalogRoutes');
const userRoutes = require('./routes/userRoutes');


const User = require('./models/User');
const seedProducts = require('./seeds/products');

const app = express();



// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/productslist");
seedProducts();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api/products", function(req,res) {
  res.json ([
    {
      type: "MDF fretwork panel",
      size: "84x36",
      image: "https://images.homedepot-static.com/productImages/116d314f-3d7b-419c-ba1d-18b6874d5721/svn/black-acurio-latticeworks-vinyl-3248pvc-bk-tol-64_1000.jpg"
    },
    {
      type: "MDF fretwork panel",
      size: "84x36",
      image: "https://images.homedepot-static.com/productImages/6171c103-b361-4d9b-a3a6-eb74ec137a04/svn/matrix-vinyl-b-bl1812-ch-5-64_1000.jpg",
    }
  ])
});

app.get("/api/wavePanels", function(req,res) {
  res.json ([
    {
      type: "3D MDF panel",
      size: "84x36",
      image: "https://image.ec21.com/image/gzchungshum/OF0009321722_1/Sell_MDF_wave_panel.jpg"
    },
    {
      type: "3D MDF panel",
      size: "84x36",
      image: "https://image.ec21.com/image/gzchungshum/OF0009321732_1/Sell_MDF_wave_board.jpg",
    }
  ])
});

app.use('/api/catalog', catalogRoutes);
app.use('/api/user', userRoutes);


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
