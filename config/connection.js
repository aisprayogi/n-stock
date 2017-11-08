var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nstock"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("MYSQL CONNECTION ERROR: " + err.stack);
    return;
  }
  console.log("CONNECTED TO 'nstock' AS ID: " + connection.threadId);
});

module.exports = connection;