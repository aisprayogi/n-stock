var express = require("express");
var router = express.Router();
var connection = require("../config/connection.js");

router.get("/", function(req, res) {
  res.render("index");  // RETURN INDEX.HANDLEBARS WITHOUT DATA FOR TEMPLATING
});

router.get("/viewall", function(req, res) {
  var queryString = "SELECT * FROM products;";     // SQL QUERY
  connection.query(queryString, function(err, result) {     // (MYSQL) CONNECTION.QUERY
    if (err) { throw err; }                                   // THROW ERRORS
    for (var key in result) {
      var price = (result[key].price).toString().split(".");
      if (price[1] < 10) {
        price[1] += "0";
      } else if (!price[1]){
        price.push('00');
      }
      result[key].price = price.join(".");
    }
    var hbObj = {
      products: result
    };
    res.render("viewall", hbObj);  // RETURN VIEWALL.HANDLEBARS WITH DATA FOR TEMPLATING
  });
});

router.get("/reports", function(req, res) {
  // SELECT ALL FROM DB
  // MANIPULATE THE DATA AS NEEDED TO POPULATE THE CHARTS
  res.render("reports");  // RETURN REPORTS.HANDLEBARS WITHOUT DATA FOR TEMPLATING
});

router.post("/api/add_product", function(req, res) {
  // ADD PRODUCTS TO DB
});

router.put("/api/edit_product/:id", function(req, res) {
  // UPDATE PRODUCT WITH ID __ IN DB
});

router.delete("/api/delete_product/:id", function(req, res) {
  // DELETE PRODUCT WITH ID __ FROM DB
});

module.exports = router;