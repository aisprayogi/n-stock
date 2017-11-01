var express = require("express");
var connection = require("./sql-connection.js");
var router = express.Router();

router.get("/", function(req, res) {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) { throw err };
    var dbArray = [];
    for (var k = 0; k < res.length; k++) {
      var item = {
        ID: res[k].item_id,
        Name: res[k].product_name,
        Department: res[k].department_name,
        Price: "$" + res[k].price,
        Stock: res[k].stock_quantity
      };
      dbArray.push(item);
    }
  });
  res.render("index", handlebarsObject);  // RETURN INDEX.HANDLEBARS WITH SQL DATA
});

router.post("/api/products", function(req, res) {
  connection.query(
    "INSERT INTO products SET ?",
    {
      product_name: item.name,
      department_name: item.department,
      price: item.price,
      stock_quantity: item.stock
    },
    function(err) { // CALL-BACK
      if (err) { throw err }
    }
  );
  res.redirect("/");  // RELOAD PAGE
});

// UPDATING INVENTORY
router.put("/api/products/:id", function(req, res) {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) { throw err }
    res.map(function(tableItems){
      if (id === tableItem.item_id) {
        var updateInv = tableItem.stock_quantity + amt;
        connection.query(
          "UPDATE products SET ? WHERE ?",
          [{
            stock_quantity: updateInv
          },
          {
            item_id: id
          }],
          function(err) { // CALL-BACK
            if (err) throw { err }
          }
        );
      }
    });
  });
  res.redirect("/");  // RELOAD PAGE
});

// REMOVING ITEMS FROM INVENTORY
router.delete("/route/name/here", function(req, res) {
  connection.query("DELETE ______ FROM products", function (err, res){
    if (err) { throw err }
    res.map(function(tableItems){

    }
  })
});

module.exports = router;