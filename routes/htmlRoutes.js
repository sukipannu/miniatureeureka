const path = require("path");
const app = require("express").Router();



// GET request
app.get("/notes", (req, res) => {
  // Reads the notes from JSON file
  res.sendFile(path.join(__dirname,"../public/notes.html"))
});

// POST  request
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"../public/index.html"))
});

// DELETE request
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname,"../public/index.html"))
});
//};

module.exports = app;
