// Import MySQL connection.
var connection = require("../db/connection.js");

function printQuestionMarks(num) {        // Prints Question Marks for multiple values in SQL command
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function convertForSQL(conversionObject) {    // Converts Objects to SQL Syntax
  var arr = [];
  for (var key in conversionObject) {         // loop through the keys and push the key/value as a string into arrays
    var value = conversionObject[key];
    if (Object.hasOwnProperty.call(conversionObject, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {   // If string has spaces, use quotations
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();                      // Translates array of strings to a single, long string
}

var orm = {   // THE ORM
  selectAll: function(tableName, callBackToBurgerModel) {
    var queryString = "SELECT * FROM " + tableName + ";";     // SQL QUERY
    console.log("SELECT ALL QUERY: " + queryString);
    connection.query(queryString, function(err, result) {     // (MYSQL) CONNECTION.QUERY
      if (err) { throw err; }                                   // THROW ERRORS
      callBackToBurgerModel(result);                            // SEND RESULTS BACK TO BURGER.JS
    });
  },

  insertOne: function(tableName, colNames, valuesToInsert, callBackToBurgerModel) {
    var queryString = "INSERT INTO " + tableName + " (" + colNames.toString() + ") " 
          + "VALUES (" + printQuestionMarks(valuesToInsert.length) + ") ";  // SQL QUERY
    console.log("INSERT QUERY: " + queryString);
    connection.query(queryString, valuesToInsert, function(err, result) {   // (MYSQL) CONNECTION.QUERY
      if (err) { throw err; }                                                 // THROW ERRORS
      callBackToBurgerModel(result);                                          // SEND RESULTS BACK TO BURGER.JS
    });
  },

  updateOne: function(tableName, tableColNamesAndValues, condition, callBackToBurgerModel) {
    var queryString = "UPDATE " + tableName + " SET " + convertForSQL(tableColNamesAndValues) + " WHERE " + condition; // SQL Query
    console.log("UPDATE QUERY: " + queryString);
    connection.query(queryString, function(err, result) {     // (MYSQL) CONNECTION.QUERY
      if (err) { throw err; }                                   // THROW ERRORS
      callBackToBurgerModel(result);                            // SEND RESULTS BACK TO BURGER.JS
    });
  }
};

module.exports = orm;