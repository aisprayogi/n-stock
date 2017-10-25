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
    console.log("-----------BAMAZON MANAGER MODE-----------");
    inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message: "What shall you do?",
            choices: [
                "View Products for Sale",
                "View Low Inventory",
                "Add to Inventory",
                "Add New Product"
            ]
        }
    ])
    .then(function(user) {
        switch (user.choice) {
            case "View Products for Sale":
                displayProducts(1);
                break;
            case "View Low Inventory":
                displayLowInventory();
                break;
            case "Add to Inventory":
                addToInventory();
                break;
            case "Add New Product":
                addNewProduct();
                break;
            default:
                console.log("INVALID CHOICE");
                start();
                break;
        }
    });
}

function addNewProduct() {
    inquirer.prompt([
        {
          name: "name",
          type: "input",
          message: "What is the new item's name?"
        },
        {
          name: "department",
          type: "input",
          message: "What department will the item go in?"
        },
        {
          name: "price",
          type: "number",
          message: "How much will the item cost?"
        },
        {
          name: "stock",
          type: "number",
          message: "How many units do we have in stock?"
        }
    ])
    .then(function(item) {
        connection.query(
            "INSERT INTO products SET ?",
            {
                product_name: item.name,
                department_name: item.department,
                price: item.price,
                stock_quantity: item.stock
            },
            function(err) {
            if (err) throw err;
            console.log("Success! Product has been added");
            setTimeout(function() {
                start();
            }, 2000);
            }
        );
    });
}

function addToInventory() {
    displayProducts(0);
    setTimeout(function() {
        inquirer.prompt([
            {
                name: "picked",
                type: "number",
                message: "Which item to add inventory to?"
            },{
                name: "amount",
                type: "number",
                message: "How many would you like to add?"
            }
        ])
        .then(function(data) {
            var id = parseInt(data.picked);
            var amt = parseInt(data.amount)
            connection.query("SELECT * FROM products", function(err, res) {
                if (err) throw err;

                res.map(function(tableItems){
                    if (id === tableItems.item_id) {
                        var updateInv = tableItems.stock_quantity + amt;
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
                                console.log("Success! Inventory updated\n");
                                setTimeout(function() {
                                    start();
                                }, 2000);
                            }
                        );
                    }
                });        
            });
        });
    }, 500);
}

function displayProducts(test) {
    console.log("\n");
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
        if (test === 1) {
            setTimeout(function() {
                start();
            }, 2000);
        }
    });
}

function displayLowInventory() {
    console.log("\n");
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
        console.table(dbArray1);
        setTimeout(function() {
            start();
        }, 2000);
    });
}
