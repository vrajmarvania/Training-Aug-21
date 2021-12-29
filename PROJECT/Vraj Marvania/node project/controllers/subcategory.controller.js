var express = require("express");
const SubCategoryDomain = require("../domains/subcategory.domain");
var router = express.Router();
const subCategoryDomain = new SubCategoryDomain();
const {verifyToken,check_user} = require('../middelware/verify');


class SubCategoryController {
    static async getallSubCategory(req, res) {
      subCategoryDomain.getAllSubCategory(req, res);
      }
    static async insertSubCategory(req, res) {
      subCategoryDomain.insertSubCategory(req, res);
      }
    static async getSubCategory(req, res) {
      subCategoryDomain.getSubCategory(req, res);
      }
    static async updateSubCategory(req, res) {
      subCategoryDomain.updateSubCategory(req, res);
      }
    static async deleteSubCategory(req, res) {
      subCategoryDomain.deleteSubCategory(req, res);
      }
      
}

//To get all employees
router.get("/getall", SubCategoryController.getallSubCategory);
router.get("/:id", SubCategoryController.getSubCategory);
router.put("/updateSubCategory",verifyToken,check_user, SubCategoryController.updateSubCategory);
router.delete("/:id",verifyToken,check_user, SubCategoryController.deleteSubCategory);
router.post("/insertSubCategory",verifyToken,check_user, SubCategoryController.insertSubCategory);


module.exports = router;