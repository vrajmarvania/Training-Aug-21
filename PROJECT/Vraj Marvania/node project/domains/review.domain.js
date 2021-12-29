const ReviewModel = require("../models/review.model");
const ProductModel = require("../models/Product.model");

class ReviewDomain {
  // get All Review-------------------------->
  async GetAllReview(req, res) {
    const Review = await ReviewModel.find();
    if (Review) {
      res.status(200).send(Review);
    } else {
      res.status(404).send("Review Not Found");
    }
  }
  
  // get  Review -------------------------->
  async GetReview(req, res) {
    const Review = await ReviewModel.findById(req.params.id);
    if (Review) {
      res.status(200).send(Review);
    } else {
      res.status(404).send("Review Not Found");
    }
  }

  // insert Review------------------------->
  async InsertReview(req, res) {
      let data = req.body;
      const Review = new ReviewModel(data);
      try {
        const query = { _id: req.params.id };
        var a = await ProductModel.findById(req.params.id);
        res.send(a)
        if (a != "") {
          const result = await Review.save();
          const dataa = { Review_id: result._id };
          const resul = await ProductModel.findOneAndUpdate(query, {
            $push: { Review: dataa },
          });
          res.send(resul);
        } else {
          res.send(404, "Review not found");
        }
      } catch (e) {
        res.send(e.message);
      }
    

  }

  // update Review---------------------->
  async UpdateReview(req, res) {
     
    if( req.body._id==null){
      res.send("data not found");
    }
    else{
    let data = req.body;
    let id = req.body._id;
    const isAvail = await ReviewModel.findById(id);

    if (isAvail) {
      try {
        const result = await ReviewModel.findByIdAndUpdate(
          id,
          {
            $set: data,
          },
          { new: true , runValidators: true}
        );
        res.send("Product  Successfully Updated");
      } catch (e) {
        res.send(e.message);
      }
    } else {
      res.status(404).send("Product Not Found");
    }
  }

  }

  // delete Review------------------------------->
  async DeleteReview(req, res) {
    let id = req.params.id;
    const Review = await ReviewModel.findByIdAndUpdate(id, {
      IsDeleted: true,
    });
    if (Review) {
      res.send("Product  Deleted Successfully");
    } else {
      res.status(404).send("Data Not Found");
    }
  }

}

module.exports = ReviewDomain;
