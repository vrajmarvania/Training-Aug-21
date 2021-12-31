const mongoose = require("mongoose");

const BlogsSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  Blog_Img: {
    type: "String",
    required: true,
  },
  Blog_Title: {
    type: String,
    required: true,
  },
  Blog_Date: {
    type: Date,
    required: true,
  },
  Blog_Dis: {
    type: String,
    required: true,
  },
  Imgs: [String],
  IsDeleted: {
    type: Boolean,
    default: 0,
  },
});


const BlogsModel = mongoose.model("Blogs", BlogsSchema);

module.exports = BlogsModel;
