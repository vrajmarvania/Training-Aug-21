var express = require("express");
const ReviewDomain = require("../domains/review.domain");
var router = express.Router();
const reviewDomain = new ReviewDomain();
const {verifyToken,check_user} = require('../middelware/verify');


class ReviewController {
    static async getAll(req, res){
        reviewDomain.GetAllReview(req, res);
      }
      static async getReview(req, res) {
        reviewDomain.GetReview(req, res);
      }
    static async insertReview(req, res) {
      
        reviewDomain.InsertReview(req, res);
      }
    static async updateReview(req, res) {
          reviewDomain.UpdateReview(req, res);
      }
    static async deleteReview(req, res) {
            reviewDomain.DeleteReview(req, res);
      }
}

//To get all employees
router.get("/getall", ReviewController.getAll);
router.get("/:id", ReviewController.getReview);
router.post("/:id",verifyToken,check_user, ReviewController.insertReview);
router.put("/update",verifyToken,check_user, ReviewController.updateReview);
router.delete("/delete/:id",verifyToken,check_user, ReviewController.deleteReview);

module.exports = router;


// {
//   "ReviewName":"Top_Smart_Watches",
// "Type":"Top_Smart_Watches",
//   "Data":[]
// }