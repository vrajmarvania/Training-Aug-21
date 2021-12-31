const BlogsModel = require("../models/blog.model");

const jwt = require("jsonwebtoken");
global.config = require("../config/config");

class BlogsDomain {
  // ===========================================================================
  // get AllBlogs
  // access:user & admin
  // ===========================================================================

  async getAllBlogs(req, res) {
    const Blogs = await BlogsModel.find();
    if (Blogs) {
      res.status(200).send(Blogs);
    } else {
      res.status(404).send("Blogs Not Found");
    }
  }
  // ===========================================================================
  // get one Blogs using id
  // access:user & admin
  // input:id
  // ===========================================================================

  async getBlogs(req, res) {
    let id = req.params.Id;
    const Blogs = await BlogsModel.find({id:id}); //.populate("department",);
    if (Blogs) {
      res.status(200).send(Blogs);
    } else {
      res.status(404).send("Blogs Not Found");
    }
  }

  // ===========================================================================
  // add new Blogs
  // access:admin  only
  //  input:--->
  //-  id
  //-  Blog_Img
  //-  Blog_Title
  //-  Blog_Date
  //-  Blog_Dis
  //-  IsDeleted
  //-  Imgs 
  // ===========================================================================

  async insertBlogs(req, res) {
    let data = req.body;
    const Blogs = new BlogsModel(data);
    try {
      const result = await Blogs.save();
      res.status(200).send("Blog Successfully Submited");
    } catch (e) {
      res.status(404).send(e.message);
    }
  }

  // ===========================================================================
  // update Blogs
  // access:admin  only
  // input:id & data
  //-  _id
  //-  Blog_Img
  //-  Blog_Title
  //-  Blog_Date
  //-  Blog_Dis
  //-  IsDeleted
  //-  Imgs 
  // ===========================================================================

  async updateBlogs(req, res) {
    let data = req.body;
    let id = req.body._id;
    const Blogs = await BlogsModel.find();
    let isAvail = Blogs.find((e) => e.id == id);

    if (isAvail) {
      try {
        const result = await BlogsModel.findByIdAndUpdate(
          id,
          { $set: data },
          { new: true }
        );
        res.status(200).send("Blog updated Successfully");
      } catch (e) {
        res.status(404).send(e.message);
      }
    } else {
      res.status(404).send("Blogs Not Found");
    }
  }

  // ===========================================================================
  // delete Blogs
  // access:admin  only
  // input:id
  // ===========================================================================

  async DeleteBlogs(req, res) {
    let id = req.params.id;
    const Blogs = await BlogsModel.findByIdAndUpdate(id, {
      IsDeleted: true,
    });
    if (Blogs) {
      res.status(200).send("Blog Deleted Successfully");
    } else {
      res.status(404).send("Data Not Found");
    }
  }
}

module.exports = BlogsDomain;
