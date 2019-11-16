const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  Name: String,
  Code: String,
  Metatitle: String,
  Description: String,
  Producer: String,
  Images: [],
  Price: String,
  PromotionPrice: String,
  IncludedVAT: String,
  Quantity: String,
  CategoryUrl: String,
  Category: String,
  Detail: String,
  CreatedDate: String,
  CreatedBy: String,
  ModifiedBy: String,
  ModifiedDate: String,
  MetaKeywords: String
});

module.exports = mongoose.model("Product", productSchema, "Product");
