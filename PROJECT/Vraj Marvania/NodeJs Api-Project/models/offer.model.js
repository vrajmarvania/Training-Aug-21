const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  Offer_id: {
    type: String,
  },
  OfferName: {
    type: String,
    unique: true,
    required: true,
  },
  Offer_Start_Date: {
    type: Date,
    required: true,
  },
  Offer_End_Date: {
    type: Date,
    required: true,
  },
  Offer_pct:{
    type: Number,
    required: true,
    min:0,
    max:100,
  },
  IsDeleted: { type: Boolean, default: 0 },
});

//Indexes----------------->
offerSchema.index({ OfferName: 1 }); // schema level

const offerModel = mongoose.model("offer", offerSchema);

module.exports = offerModel;
