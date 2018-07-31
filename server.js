const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api/sharks", function(req,res) {
  res.json ([
    {
      type: "mako",
      speed: 45,
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Isurus_oxyrinchus_by_mark_conlin2.JPG"
    },
    {
      type: "greate white",
      speed: 25,
      image: "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA2MS8wNTYvb3JpZ2luYWwvZ3JlYXQtd2hpdGUuanBn",
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
