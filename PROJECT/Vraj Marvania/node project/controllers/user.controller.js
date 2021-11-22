var express = require("express");
const userDomain = require("../domains/user.domain");
var router = express.Router();
const LoginDomain = new userDomain();

class userController {
    static async get(req, res) {
        LoginDomain.getAllUser(req, res);
      }
    static async RegisterUser(req, res) {
        LoginDomain.RegisterUser(req, res);ss
      }
      static async login(req, res) {
        LoginDomain.login(req, res);
      }
   
}

//To get all employees

router.get("/", userController.get);
router.post("/register", userController.RegisterUser);
router.post("/login", userController.login);




module.exports = router;