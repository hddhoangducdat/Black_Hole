var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index", { title: "Black Hole Admin" });
});

router.get("/signup", function(req, res) {
  res.render("signup", { title: "Black Hole Admin" });
});

router.get("/forgotPassword", function(req, res) {
  res.render("forgotPassword", { title: "Black Hole Admin" });
});

module.exports = router;
