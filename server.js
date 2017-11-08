// -------------- EXPRESS ------------------ //
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

// ----------- STATIC ROUTES --------------- //
app.use(express.static("public"));

// ------------ BODY-PARSER ---------------- //
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/products_controller.js");
app.use("/", routes);

// ----------- PORT LISTENER --------------- //
app.listen(port, function() {
    console.log("App listening on port " + port);
});