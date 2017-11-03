var mysql = require("mysql");
var connection = require("../controllers/connection.js");

function displayLowInventory() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    var dbArray1 = [];
    for (var j = 0; j < res.length; j++) {
      if(res[j].stock_quantity < 5){
        var item = {
          ID: res[j].item_id,
          Name: res[j].product_name,
          Department: res[j].department_name,
          Price: "$" + res[j].price,
          Stock: res[j].stock_quantity
        };
        dbArray1.push(item);
      }
    }
  });
}

// Set the width of the side navigation to 250px
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

// Set the width of the side navigation to 0
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
