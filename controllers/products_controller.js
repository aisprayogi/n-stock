var express = require("express");
var burger = require("../models/burger.js");            // Import the model (burger.js) to use its database functions.
var router = express.Router();

router.get("/", function(req, res) {
  // GRABS ALL ITEMS IN DB
});

router.post("/api/products", function(req, res) {
  // ADDS ITEM TO DB
});

router.put("/api/products/:id", function(req, res) {
  var condition = 'id = ' + req.params.id;
  // UPDATES ITEM IN DB
});

router.delete("/api/products/:id", function(req, res) {
  var condition = 'id = ' + req.params.id;
  // DELETES ITEM IN DB
});

module.exports = router;
