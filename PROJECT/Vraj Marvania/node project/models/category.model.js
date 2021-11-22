const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  "id":{
    type: String,
   },
  CategoryName: {
    type: "String",
    unique: true,
    required: true,
  },
  Type: {
    type: "String",
    required: true,
  },
  Fimg: {
    type: "String",
  },
  Data: [
    {
      Productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    },
  ],
  IsDeleted: { type: Boolean, default: 0 },
});
const categoryModel = mongoose.model("Category", categorySchema);

module.exports = categoryModel;
