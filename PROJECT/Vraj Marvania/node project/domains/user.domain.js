const UserModel = require("../models/user.model");

const jwt = require('jsonwebtoken');
global.config = require('../config/config');

const bcrypt = require('bcrypt');

const saltRounds = 10;

// console.log(UserModel)


class loginDomain {


  // get all user data---------------------->
  async getAllUser(req, res) {
    const user = await UserModel.UserModel.find()
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


  async login(req, res) {
    let userdata = {
      Email: req.body.Email,
    };
    var val = await UserModel.UserModel.find(userdata)
    console.log(val)
    console.log(val[0].Password)
    console.log(req.body.Password)
    var vala = await bcrypt.compare(req.body.Password, val[0].Password);

    if (vala) {
      let token = jwt.sign({ id: val[0]._id,Type:val[0].Type }, global.config.secretKey, {
        algorithm: global.config.algorithm,
        expiresIn: '7d'
      });

      res.status(200).json({
        message: 'Login Successful',
        jwtoken: token,
        id: val[0]._id
      });
    }
    else {
      res.status(401).json({
        message: 'Login Failed',
      });
    }

  }
}

module.exports = loginDomain;




