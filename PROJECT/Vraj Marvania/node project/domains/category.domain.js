const CategoryModel = require("../models/category.model");

class CategoryDomain {

// get All Category-------------------------->
    async getAllCategory(req, res) {
        const Category = await CategoryModel.find().populate("Data.Productid");
        res.send(Category);
      }

// get  Category -------------------------->
      async getCategory(req, res) {
        let id = req.params.id;
        const Category = await CategoryModel.find({CategoryName:id}).populate("Data.Productid");
        if (Category!='') {
          res.send(Category);
        }
        else {
          res.status(404).send("Category Not Found");
        }
      } 
       
// insert Category------------------------->
     async insertCategory(req, res) {
        let data = req.body;
        // console.log(data)
        // console.log("----")
        const Category = new CategoryModel(data);
        try {
          const result = await Category.save();
          res.send(result);
        }
        catch (e) {
          res.send(e.message);
        }
      }
      
// update Category---------------------->
      async updateCategory(req, res) 
      {
        let data = req.body;
        let id = req.body._id;
        const Category = await CategoryModel.find();
        let isAvail = Category.find((e) => e.id == id);
        if (isAvail) {
          try {
            const result = await CategoryModel.findByIdAndUpdate( id,{$set: data,},{ new: true });
            res.send(result);
          }
          catch (e) {
            res.send(e.message);
          }
        }
        else
        {
          res.status(404).send("Category Not Found");
        }
      }
      
// delete Category------------------------------->
      async deleteCategory(req, res) {
        let id = req.params.id;
        const Category = await CategoryModel.findByIdAndUpdate(id,{ "isdeleted": true});
        if (Category) {
          res.send("Category  Deleted Successfully");
        }
        else {
          res.status(404).send("Data Not Found");
        }
      }
      

}

module.exports = CategoryDomain;
