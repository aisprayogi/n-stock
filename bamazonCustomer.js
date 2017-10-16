var mysql = require("mysql");
var inquirer = require("inquirer");
var consoleTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazondb"
});

connection.connect(function(err) {
    if (err) throw err;
    start();
});

function start() {
    console.log("------------WELCOME TO BAMAZON------------");
    displayProducts();
    setTimeout(function() {
        inquirer.prompt([
            {
              name: "id",
              type: "number",
              message: "What's the ID of the item you want?"
            },
            {
              name: "amt",
              type: "number",
              message: "How many of that item do you want?"
            }
          ])
        .then(function(answers) {
            goShopping(answers.id, answers.amt);
        });
    }, 500);
}

function goShopping(id2, amt2){
    var id = parseInt(id2);
    var amt = parseInt(amt2)
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            if (id === res[i].item_id) {
                if (amt <= res[i].stock_quantity) {
                    var updateInv = res[i].stock_quantity - amt;
                    var price = res[i].price;
                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: updateInv
                            },
                            {
                                item_id: id
                            }
                        ],
                        function(error) {
                            if (error) throw error;
                            var total = price * amt;
                            console.log("Your total is $" + total);
                            console.log("Great doing business with ya!");
                            setTimeout(function() {
                                inquirer.prompt([
                                    {
                                      name: "test",
                                      type: "confirm",
                                      message: "Want to keep shopping?"
                                    }
                                  ])
                                .then(function(answer) {
                                    if (answer.test) {
                                        start();
                                    } else {
                                        connection.end();
                                    }
                                });
                            }, 500);
                        }
                    );
                } else {
                    console.log("Sorry, we don't have that many! Try again!");
                    setTimeout(function() {
                        start();
                    }, 1000);
                }
            }
        }

    });
}

function displayProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
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
        console.table(dbArray);
    });
}