const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
global.config = require("../config/config");
const bcrypt = require("bcrypt");
const saltRounds = 10;

class loginDomain {
  // get all user data---------------------->
  async getAllUser(req, res) {
    const user = await UserModel.UserModel.find();
    res.send(user);
  }

  async getUser(req, res) {
    let _id = req.params.id;
    var user = await UserModel.UserModel.findById(_id);
    res.send(user);
  }

  // Register User------------------------->
  async RegisterUser(req, res) {
    let data = req.body;
    data.Password = await bcrypt.hash(data.Password, saltRounds);

    const user = new UserModel.UserModel(data);
    try {
      const result = await user.save();
      res.send(result);
    } catch (e) {
      res.send(e.message);
    }
  }
  
  // login user
  async login(req, res) {
    let userdata = {
      Email: req.body.Email,
    };
    var val = await UserModel.UserModel.find(userdata);

    console.log(userdata)
    var vala = await bcrypt.compare(req.body.Password, val[0].Password);

    if (vala) {
      let token = jwt.sign(
        { id: val[0]._id, Type: val[0].Type },
        global.config.secretKey,
        {
          algorithm: global.config.algorithm,
          expiresIn: "7d",
        }
      );

      res.status(200).json({
        message: "Login Successful",
        jwtoken: token,
        id: val[0]._id,
      });
    } else {
      res.status(401).json({
        message: "Login Failed",
      });
    }
  }

  // update user
  async updateUser(req, res) {
    let data = req.body;
    let id = req.body._id;
    const isAvail = await UserModel.UserModel.findById(id);
    if (isAvail) {
      try {
        const result = await UserModel.UserModel.findByIdAndUpdate(
          id,
          { $set: data },
          { new: true }
        );
        res.send(result);
      } catch (e) {
        res.send(e.message);
      }
    } else {
      res.status(404).send("User Not Found");
    }
  }
}

module.exports = loginDomain;
