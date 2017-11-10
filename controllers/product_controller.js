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
      if (price[1] < 10 && price[1].length === 1) {
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
  console.log(req.body);
  // connection.query(
  //   "INSERT INTO products SET ?",
  //   {
  //       product_name: req.name,
  //       department_name: req.dept,
  //       price: req.price,
  //       quantity_on_hand: req.stock
  //   },
  //   function(err) {
  //     if (err) { throw err; }
  //     // Callback to Front End
  //   }
  // );
});

router.post("/api/edit_product/:id/:itemname/:dept/:price/:stock", function(req, res) {
  connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        product_name: req.params.itemname,
        department_name: req.params.dept,
        price: req.params.price,
        quantity_on_hand: req.params.stock
      },
      {
        item_id: req.params.id
      }
    ],
    function(error) {
      if (error) { throw error; }
      // Callback to Front End
    }
  );
});

router.post("/api/remove_product/:id", function(req, res) {
  connection.query(
    "DELETE FROM products WHERE ?",
    [
      {
        item_id: req.params.id
      }
    ],
    function(error) {
      if (error) { throw error; }
      // Callback to Front End
    }
  );
});

module.exports = router;