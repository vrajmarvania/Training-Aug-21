const ProductModel = require("../models/Product.model");
const CategoryModel = require("../models/category.model");

const jwt = require("jsonwebtoken");
global.config = require("../config/config");

class SearchDomain {
  // ===========================================================================
  // filter AllProducts
  // -CategoryName
  // -Price
  // -Qty
  // ===========================================================================

  async getAllProduct(req, res) {
    var data = req.query;
    var query = {};
    if (data.CategoryName != undefined) {
      query["CategoryName"] = data.CategoryName;
    }
    if (data.minPrice != "null" && data.maxPrice) {
      query["Price"] = { $gt: data.minPrice, $lt: data.maxPrice };
    }
    if (data.available != null) {
      query['Qty'] = { $gt: 1 };
    }
    console.log(query);
    const Product = await ProductModel.find(query)
      .populate("Offer_id")
      .populate("Review.Review_id")
      .exec();
    if (Product) {
      res.status(200).send(Product);
    } else {
      res.status(404).send("Product Not Found");
    }
  }
}

module.exports = SearchDomain;
