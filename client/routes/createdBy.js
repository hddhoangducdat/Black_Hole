var express = require("express");
var _ = require("lodash");
var router = express.Router();
var productModel = require("../models/productModel");

/* GET home page. */
router.get("/:nsx", async (req, res) => {
  const carts = await productModel.find({ CreatedBy: req.params.nsx });

  res.render("createdBy", {
    title: "Black Hole",
    condition: false,
    carts
  });
});

module.exports = router;
