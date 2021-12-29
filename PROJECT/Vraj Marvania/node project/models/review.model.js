const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  Review_Id: {
    type: String,
    required: true
  },
  Name: {
    type: String,
    required: true,
  },
  Rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  Review_Title: {
    type: String,
    required: true
  },
  Review: {
    type: String,
    required: true
  },
  Imgs: {
    type: String,
  },
  IsDeleted: {
    type: Boolean,
    default: 0,
  },
 
});


const ReviewModel = mongoose.model("Review", ReviewSchema);

module.exports = ReviewModel;
