const BlogsModel = require("../models/blog.model");

const jwt = require("jsonwebtoken");
global.config = require("../config/config");

class BlogsDomain {
  // get AllBlogs----------------------->
  async getAllBlogs(req, res) {
    const Blogs = await BlogsModel.find();
    if (Blogs) {
      res.status(200).send(Blogs);
    } else {
      res.status(404).send("Blogs Not Found");
    }
  }

  // get Blogs---------------------------->
  async getBlogs(req, res) {
    let id = req.params.Id;
    const Blogs = await BlogsModel.findById(id); //.populate("department",);
    if (Blogs) {
      res.status(200).send(Blogs);
    } else {
      res.status(404).send("Blogs Not Found");
    }
  }

  // insert Blogs------------------------------>

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

  //   update blog ----------------------->
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

  // delete Blogs ---------------------->
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
