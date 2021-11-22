const ProductModel = require("../models/Product.model");
const CategoryModel = require("../models/category.model");

const jwt = require('jsonwebtoken');
global.config = require('../config/config');


class ProductDomain {
  
  // get AllProduct----------------------->
  async getAllProduct(req, res) {
    const Product = await ProductModel.find();
    res.send(Product);
  }

  // get Product---------------------------->
  async getProduct(req, res) {
    let id = req.params.Id;
    console.log(id)
    const Product = await ProductModel.findById(id)//.populate("department",);
    if (Product) {
      res.send(Product);
    } else {
      res.status(404).send("product Not Found");
    }
  }

  // insert Product------------------------------>
  async insertProduct(req, res) {
    
    let data = req.body;
    const Product = new ProductModel(data);
    try {
      const query = { CategoryName: req.body.CategoryName };
      var a = await CategoryModel.find(query);
      if (a != "") {
        const result = await Product.save();
        const dataa = { Productid: result._id };
        const resul = await CategoryModel.findOneAndUpdate(query, { $push: { Data: dataa } });
        res.send(resul);
      }
      else {
        res.send(404, "Category not found");
      }
    }
    catch (e) {
      res.send(e.message);
    }
  }

  // update  Product--------------------->
  async updateProduct(req, res) {
    let data = req.body;
    let id = req.body._id;
    const product = await ProductModel.find();
    let isAvail = product.find((e) => e.id == id);

    if (isAvail) {
      try {
        const result = await ProductModel.findByIdAndUpdate(
          id,
          {
            $set: data,
          },
          { new: true }
        );
        res.send(result);
      } catch (e) {
        res.send(e.message);
      }
    } else {
      res.status(404).send("Product Not Found");
    }
  }
  
  // DeleteProduct  ------------------->
  async DeleteProduct(req, res) {
    let id = req.params.id;
    console.log(id)
    const Product = await ProductModel.findByIdAndUpdate(id, { "isdeleted": true });
    if (Product) {
      res.send("Product  Deleted Successfully");
    } else {
      res.status(404).send("Data Not Found");
    }
  }


}



module.exports = ProductDomain;
