var orm = require("../config/orm.js");

var burger = {
  selectAll: function(callBackToController) {
    orm.selectAll("burgers", function(dataFromORM) {
      callBackToController(dataFromORM);
    });
  },
  insertOne: function(columnNames, columnValues, callBackToController) {
    orm.insertOne("burgers", columnNames, columnValues, function(dataFromORM) {
      callBackToController(dataFromORM);
    });
  },
  updateOne: function(objColVals, condition, callBackToController) {
    orm.updateOne("burgers", objColVals, condition, function(dataFromORM) {
      callBackToController(dataFromORM);
    });
  }
};

module.exports = burger;