var express = require("express");

var router = express.Router();

// Import the model (pizza.js) to use its database functions.
var pizza = require("../models/pizza.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  pizza.all(function(data) {
    var hbsObject = {
      pizzas: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/pizzas_db", function(req, res) {
    pizza.create([
      "pizza_type"
    ], [
      req.body.pizza_type
    ], function(result) {
      // Send back the ID of the new quote
      res.redirect("/");
    });
  });

  router.post("/api/pizzas_db/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    pizza.update({
        devoured: true
    }, condition, function(results){
        res.redirect("/");
    });
});

//export routes to the server
module.exports = router;