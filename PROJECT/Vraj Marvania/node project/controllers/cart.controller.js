

var express = require("express");
const CartDomain = require("../domains/cart.domain");
var router = express.Router();
const cartDomain = new CartDomain();

class cartController {
    static async get(req, res) {
      cartDomain.getcartdata(req, res);
      }
    static async insertCart(req, res) {
      cartDomain.insertCart(req, res);
      }
    static async Remove(req, res) {
        cartDomain.Remove(req, res);
      }
   
}

//To get all employees

router.get("/", cartController.get);
router.post("/insertCart", cartController.insertCart);
router.delete("/Remove", cartController.Remove);


module.exports = router;