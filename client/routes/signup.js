var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
  res.render("signup", { title: "Black Hole", condition: false });
});

module.exports = router;
