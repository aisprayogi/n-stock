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

// ---------- METHOD-OVERRIDE -------------- //
var methodOverride = require("method-override");
app.use(methodOverride("_method"));

// --------------- ROUTES ------------------ //
var routes = require("./controllers/routes.js");
app.use("/", routes);

// ----------- PORT LISTENER --------------- //
app.listen(port, function() {
    console.log("App listening on port " + port);
});