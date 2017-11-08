var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.render("index");  // RETURN INDEX.HANDLEBARS WITHOUT DATA FOR TEMPLATING
});

router.get("/viewall", function(req, res) {
  // SELECT ALL FROM DB
  // ASSIGN DB DATA TO A VARIABLE "WHATEVER"
  var whatever = {};
  res.render("viewall", whatever);  // RETURN VIEWALL.HANDLEBARS WITH DATA FOR TEMPLATING
});

router.get("/reports", function(req, res) {
  // SELECT ALL FROM DB
  // MANIPULATE THE DATA AS NEEDED TO POPULATE THE CHARTS
  res.render("reports");  // RETURN REPORTS.HANDLEBARS WITHOUT DATA FOR TEMPLATING
});

router.post("/api/products", function(req, res) {
  // ADD PRODUCTS TO DB
});

router.put("/api/products/:id", function(req, res) {
  // UPDATE PRODUCT WITH ID __ IN DB
});

router.delete("/api/products/:id", function(req, res) {
  // DELETE PRODUCT WITH ID __ FROM DB
});

module.exports = router;