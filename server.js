var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var port = process.env.PORT || 3000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Set Body-Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Override form POST to have ?_method=PUT and ?_method=DELETE
app.use(methodOverride("_method"));

// Import routes and give the server access to them.
var routes = require("./controllers/routes.js");
app.use("/", routes);

// Listen
app.listen(port);