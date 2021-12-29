const CategoryModel = require("../models/category.model");

class CategoryDomain {
  // get All Category-------------------------->
  async getAllCategory(req, res) {
    const Category = await CategoryModel.find().populate([
      {
        path: "Data.Productid",
        model: "Product",
        populate: {
          path: "Offer_id",
        },
      },
    ]);
    if (Category != "") {
      res.status(200).send(Category);
    } else {
      res.status(404).send("Category Not Found");
    }
  }

  // get  Category -------------------------->
  async getCategory(req, res) {
    let id = req.params.id;
    const Category = await CategoryModel.find(
      { CategoryName: id },
      "-IsDeleted -__v "
    ).populate([
      {
        path: "Data.Productid",
        model: "Product",
        populate: {
          path: "Offer_id",
        },
      },
    ]);
    if (Category != "") {
      res.status(200).send(Category);
    } else {
      res.status(404).send("Category Not Found");
    }
  }

  // insert Category------------------------->
  async insertCategory(req, res) {
    let data = req.body;
    const Category = new CategoryModel(data);
    try {
      const result = await Category.save();
      res.status(200).send(result);
    } catch (e) {
      res.send(e.message);
    }
  }

  // update Category---------------------->
  async updateCategory(req, res) {
    let data = req.body;
    let id = req.body._id;
    const Category = await CategoryModel.findById(id);
    if (Category) {
      try {
        const result = await CategoryModel.findByIdAndUpdate(
          id,
          { $set: data },
          { new: true }
        );
        res.status(200).send(result);
      } catch (e) {
        res.status(404).send(e.message);
      }
    } else {
      res.status(404).send("Category Not Found");
    }
  }

  // delete Category------------------------------->
  async deleteCategory(req, res) {
    let id = req.params.id;
    const avl = await CategoryModel.findById(id);
    if (avl.Data[0] == null) {
      const Category = await CategoryModel.findByIdAndUpdate(id, {
        IsDeleted: true,
      });
      if (Category) {
        res.status(200).send("Category  Deleted Successfully");
      } else {
        res.status(404).send("Category Not Found");
      }
    } else {
      res.status(404).send("This Category have many relation with product");
    }
  }
}

module.exports = CategoryDomain;
