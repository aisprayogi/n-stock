var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: ""
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("MYSQL CONNECTION ERROR: " + err.stack);
    return;
  }
  console.log("Database Connected at ID " + connection.threadId);
});

module.exports = connection;