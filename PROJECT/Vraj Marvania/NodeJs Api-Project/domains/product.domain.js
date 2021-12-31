const ProductModel = require("../models/Product.model");
const CategoryModel = require("../models/category.model");

const jwt = require("jsonwebtoken");
global.config = require("../config/config");

class ProductDomain {
  // ===========================================================================
  //get AllProduct
  // access:user & admin
  // ===========================================================================

  async getAllProduct(req, res) {
    const Product = await ProductModel.find({ isdeleted: false })
      .populate("Offer_id")
      .populate("Review.Review_id");
    if (Product) {
      res.status(200).send(Product);
    } else {
      res.status(404).send("Product Not Found");
    }
  }
  // ===========================================================================
  //get Product
  // access:user & admin
  // input:id
  // ===========================================================================

  async getProduct(req, res) {
    let id = req.params.Id;
    const Product = await ProductModel.find({id:id}).populate("Offer_id");
    if (Product) {
      res.status(200).send(Product);
    } else {
      res.status(404).send("product Not Found");
    }
  }
  // ===========================================================================
  //insert Product
  // access: admin
  // input:id
  // ===========================================================================

  async insertProduct(req, res) {
    let data = req.body;
    const Product = new ProductModel(data);
    try {
      const query = { CategoryName: req.body.CategoryName };
      var a = await CategoryModel.find(query);
      if (a != "") {
        const result = await Product.save();
        const dataa = { Productid: result._id };
        const resul = await CategoryModel.findOneAndUpdate(query, {
          $push: { Data: dataa },
        });
        res.status(200).send("Successfully Isnserted");
      } else {
        res.send(404, "Category not found");
      }
    } catch (e) {
      res.send(e.message);
    }
  }
  // ===========================================================================
  // update  Product
  // access:admin
  // input:id
  // ===========================================================================

  async updateProduct(req, res) {
    if (req.body._id == null) {
      res.status(404).send("id not found");
    } else {
      let data = req.body;
      let id = req.body._id;
      const product = await ProductModel.find();
      let isAvail = product.find((e) => e._id == id);

      if (isAvail) {
        try {
          const result = await ProductModel.findByIdAndUpdate(
            id,
            {
              $set: data,
            },
            { new: true, runValidators: true }
          );
          res.status(200).send("Product  Successfully Updated");
        } catch (e) {
          res.send(e.message);
        }
      } else {
        res.status(404).send("Product Not Found");
      }
    }
  }

  // ===========================================================================
  //DeleteProduct
  // access:admin
  // input:id
  // ===========================================================================

  // DeleteProduct  ------------------->
  async DeleteProduct(req, res) {
    let id = req.params.id;
    if (id == null) {
      res.status(404).send("Id Not Found");
    }
    const Product = await ProductModel.findByIdAndUpdate(id, {
      isdeleted: true,
    });

    const query = { CategoryName: Product.CategoryName };
    const dataa = { Productid: Product._id };
    const resul = await CategoryModel.findOneAndUpdate(query, {
      $pull: { Data: { Productid: id } },
    });
    if (resul) {
      res.status(200).send("Product  Deleted Successfully");
    } else {
      res.status(404).send("Data Not Found");
    }
  }
}

module.exports = ProductDomain;
