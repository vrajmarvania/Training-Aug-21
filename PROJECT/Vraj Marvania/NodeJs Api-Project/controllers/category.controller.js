var express = require("express");
const CategoryDomain = require("../domains/category.domain");
var router = express.Router();
const categoryDomain = new CategoryDomain();
const {verifyToken,check_user} = require('../middelware/verify');


class CategoryController {
    static async get(req, res) {
        categoryDomain.getAllCategory(req, res);
      }
    static async insertCategory(req, res) {
        categoryDomain.insertCategory(req, res);
      }
    static async getCategory(req, res) {
        categoryDomain.getCategory(req, res);
      }
    static async updateCategory(req, res) {
          categoryDomain.updateCategory(req, res);
      }
    static async deleteCategory(req, res) {
            categoryDomain.deleteCategory(req, res);
      }
}

//To get all employees
router.get("/getall", CategoryController.get);
router.get("/:id", CategoryController.getCategory);

router.put("/update",verifyToken,check_user, CategoryController.updateCategory);
router.delete("/:id",verifyToken,check_user, CategoryController.deleteCategory);
router.post("/insertCategory",verifyToken,check_user, CategoryController.insertCategory);


module.exports = router;


// {
//   "CategoryName":"Top_Smart_Watches",
// "Type":"Top_Smart_Watches",
//   "Data":[]
// }