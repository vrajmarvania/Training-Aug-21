const mongoose = require("mongoose");


const SubcategorySchema = new mongoose.Schema({
  "id":{
     type: String,
    },
  "SubCategoryName": {
    type: String,
    required: true,
    unique: true
  },
  "type": {
    type: String,
    required: true
  },
  "Fimg": {
    type: String
  },
  "Data": [
    {
      "_id":
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      }
    }
  ],
  "IsDeleted": { type: Boolean, default: 0 },
})

const SubCategoryModel = mongoose.model("SubCategory", SubcategorySchema);

module.exports = SubCategoryModel;
