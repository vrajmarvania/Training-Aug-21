var express = require("express");
const OrderDomain = require("../domains/order.domain");
var router = express.Router();
const orderDomain = new OrderDomain();
const {verifyToken,check_user} = require('../middelware/verify');

class OrderController {
    static async get(req, res) {
        orderDomain.getAllOrder(req, res);
      }
    static async getById(req, res) {
        orderDomain.getById(req, res);
      }
    static async SetOrder(req, res) {
        orderDomain.SetOrder(req, res);
      }
}

//To get all employees

router.get("/get", OrderController.get);
router.get("/:id", OrderController.getById);
router.post("/insertOrder", OrderController.SetOrder);




module.exports = router;


// {  
//   "OrderId":344,
// "Phone_No":848484484,
// "Payment_Id":"121212",
// "Address":"kalindri",
// "City": "raj",
// "State":"guj",
// "Pincode":"360005"

// }
// 61933405862a515b21331556