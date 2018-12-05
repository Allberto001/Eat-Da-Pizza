// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var pizza = {
  all: function(cb) {
    orm.all("pizzas_db", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("pizzas_db", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("pizzas_db", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// sending it to pizzacontroller.js
module.exports = pizza;