const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api/products", function(req,res) {
  res.json ([
    {
      type: "MDF Panel",
      size: "84x36",
      image: "https://images.homedepot-static.com/productImages/116d314f-3d7b-419c-ba1d-18b6874d5721/svn/black-acurio-latticeworks-vinyl-3248pvc-bk-tol-64_1000.jpg"
    },
    {
      type: "MDF Panel",
      size: "84x36",
      image: "https://images.homedepot-static.com/productImages/6171c103-b361-4d9b-a3a6-eb74ec137a04/svn/matrix-vinyl-b-bl1812-ch-5-64_1000.jpg",
    }
  ])
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
