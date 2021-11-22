var express = require("express");
const ProductDomain = require("../domains/product.domain");
var router = express.Router();
const productDomain = new ProductDomain();
const {verifyToken,check_user} = require('../middelware/verify');

class ProductController {
    static async get(req, res) {
          productDomain.getAllProduct(req, res);
      }
    static async insertProduct(req, res) {
          productDomain.insertProduct(req, res);
      }
    static async getProduct(req, res) {
          productDomain.getProduct(req, res);
      }
    static async updateProduct(req, res) {
          productDomain.updateProduct(req, res);
      }
    static async DeleteProduct(req, res) {
          productDomain.DeleteProduct(req, res);
      }
}

//To get all employees
router.get("/", ProductController.get);
router.get("/:Id", ProductController.getProduct);

router.put("/updateProduct",verifyToken,check_user, ProductController.updateProduct);
router.delete("/:id",verifyToken,check_user, ProductController.DeleteProduct);
router.post("/insertProduct",verifyToken,check_user, ProductController.insertProduct);



module.exports = router;



// {"Name": "BOAT Airdopes 121 v2",
// "Img": "https://utioutll.sirv.com/Smart%20Watches/1_1_19.png",
// "Dis": ["Upto 75% Off On Best Sellers"," Stylish dual tone finish"," Immersive, HD sound quality"],
// "Price": 999.00,
// "OldPrice":  2999.00,
// "CategoryName":"Top_Smart_Watches"
// }
