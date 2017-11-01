var express = require("express");
var burger = require("../models/burger.js");            // Import the model (burger.js) to use its database functions.
var router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(dataFromBurgerModel) {
    var handlebarsObject = {
      burgers: dataFromBurgerModel
    };
    res.render("index", handlebarsObject);  // RETURN INDEX.HANDLEBARS
  });
});

router.post("/api/burgers", function(req, res) {
  console.log(req.body);
  burger.insertOne(   //burger.insertOne([cols], [vals], callBack(){})
    [ "burger_name" ], 
    [ req.body.burger_name ], 
    function(result) {
      res.redirect("/");  // RELOAD PAGE
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = 'id = ' + req.params.id;
  burger.updateOne(   //burger.updateOne({objColVals}, condition, callBack(){})
    {   
      devoured: true
    }, 
    condition, 
    function(result) {
      res.redirect("/");  // RELOAD PAGE
  });
});

module.exports = router;
