const SubCategoryModel = require("../models/subcategory.model");

class SubCategoryDomain {
  
  // get AllSubCategory------------------->
    async getAllSubCategory(req, res) {
        const SubCategory = await SubCategoryModel.find().populate("Data._id");
        // const Category = await CategoryModel.find()//.populate("Data.Productid");

        res.send(SubCategory);
      }

      // get SubCategory ------------------>
      async getSubCategory(req, res) {
        let id = req.params.id;
        const SubCategory = await SubCategoryModel.find({CategoryName:id}).populate("Data._id");
        if (SubCategory!='') {
          res.send(SubCategory);
        } else {
          res.status(404).send("Category Not Found");
        }
      } 

      // insert SubCategory  ----------------->
    async insertSubCategory(req, res) {
        //getting user input
        let data = req.body;
        console.log(data)
        console.log('data')

        const SubCategory = new SubCategoryModel(data);
        try {
          const result = await SubCategory.save();
          res.send(result);
        } catch (e) {
          res.send(e.message);
        }
      }
      // update SubCategory  ---------------->
      async updateSubCategory(req, res) 
      {
        let data = req.body;
        let id = req.body._id;
        const SubCategory = await SubCategoryModel.find();
        let isAvail = SubCategory.find((e) => e.id == id);
      
        if (isAvail) {
          try {
            const result = await SubCategoryModel.findByIdAndUpdate(id,{$set: data,},{ new: true });
            res.send(result);
          }
          catch (e) {
            res.send(e.message);
          }
        }
        else {
          res.status(404).send("SubCategory Not Found");
        }
      }

      // delete SubCategory ---------------------->
      async deleteSubCategory(req, res) {
        let id = req.params.id;
        const SubCategory = await SubCategoryModel.findByIdAndUpdate(id,{ "isdeleted": true});
        if (SubCategory) {
          res.send("SubCategory  Deleted Successfully");
        } else {
          res.status(404).send("Data Not Found");
        }
      }
}

module.exports = SubCategoryDomain;
