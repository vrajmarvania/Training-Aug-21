const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  Name: {
    type: String,
    unique: true,
    // required: true,
  },
  CategoryName: {
    type: String,
    required: true,
    // ref:"category"
  },
  img: {
    type: String,
    required: true,
  },
  Color: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
    min: 0,
  },
  OldPrice: {
    type: Number,
    required: true,
    min: 0,
  },
  Qty: {
    type: Number,
    min: 1,
    required: true,
  },

  Dis: {
    type: ["String"],
  },
  Offer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "offer",
  },
  Review: [
    {
      Review_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    },
  ],
  isdeleted: { type: Boolean, default: 0 },
});

//Indexes----------------->
productSchema.index({ Name: 1 }); // schema level

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
