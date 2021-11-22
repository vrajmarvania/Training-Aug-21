const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
  "id":{
    type: String,
   },
  "Name": {
    "type": "String",
    unique: true ,
    required: true
  },
  "Price": {
    "type": "Number",
    required: true
  },
  "Img": {
    "type": "String",
    required: true
  },
  "OldPrice": {
    "type": "Number",
    required: true
  },
  "Dis": {
    "type": [
      "String"
    ]
  },
  "CategoryName":{
    "type": "String",
    required: true
  },
  "isdeleted":{ type: Boolean, default:0 }, 
})


const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
