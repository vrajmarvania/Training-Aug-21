var express = require("express");
const BlogsDomain = require("../domains/blog.domain");
var router = express.Router();
const blogsDomain = new BlogsDomain();
const {verifyToken,check_user} = require('../middelware/verify');

class BlogsController {
    static async get(req, res) {
          blogsDomain.getAllBlogs(req, res);
      }
    static async getBlogs(req, res) {
        blogsDomain.getBlogs(req, res);
    }
    static async insertBlogs(req, res) {
          blogsDomain.insertBlogs(req, res);
      }
  
    static async updateBlogs(req, res) {
          blogsDomain.updateBlogs(req, res);
      }
    static async deleteBlogs(req, res) {
          blogsDomain.DeleteBlogs(req, res);
      }
}

//To get all employees
router.get("/get", BlogsController.get);
router.get("/:Id", BlogsController.getBlogs);

router.put("/updateBlogs",verifyToken,check_user, BlogsController.updateBlogs);
router.delete("/deleteblog/:id",verifyToken,check_user, BlogsController.deleteBlogs);
router.post("/insertBlogs",verifyToken,check_user, BlogsController.insertBlogs);



module.exports = router;



// {"Name": "BOAT Airdopes 121 v2",
// "Img": "https://utioutll.sirv.com/Smart%20Watches/1_1_19.png",
// "Dis": ["Upto 75% Off On Best Sellers"," Stylish dual tone finish"," Immersive, HD sound quality"],
// "Price": 999.00,
// "OldPrice":  2999.00,
// "CategoryName":"Top_Smart_Watches"
// }
