const OrderModel = require("../models/order.model");
const CartModel = require("../models/cart.model");
const ProductModel = require("../models/Product.model");

const jwt = require("jsonwebtoken");
global.config = require("../config/config");
const a = require("../models/user.model");
const conn = require("../app"); // import connection
const { compareSync } = require("bcrypt");

class OrderDomain {
  // ===========================================================================
  //  get  All order details
  // access:user & admin
  // ===========================================================================

  async getAllOrder(req, res) {
    var Order = await OrderModel.OrderModel.find();
    res.status(200).send(Order);
  }

  // ===========================================================================
  //  get   order details
  // access:user & admin
  // input:id
  // ===========================================================================

  async getById(req, res) {
    let id = req.params.id;
    const Order = await OrderModel.OrderModel.find({id:id}, "-id"); //.populate("department",);
    if (Order) {
      res.send(Order);
    } else {
      res.status(404).send("product Not Found");
    }
  }

  // ===========================================================================
  // insert  order details
  // access:user & admin
  // input:id
  // ===========================================================================

  // insert  order details
  async SetOrder(req, res) {
    // find userid from token
    const token = req.headers["authorization"];
    var id = jwt.verify(token, global.config.secretKey, {
      algorithm: global.config.algorithm,
    }).id;
    const user = await a.UserModel.find(
      { _id: id },
      "First_Name Last_Name Email  Type -_id"
    );

    // cart --> OrderDetails
    const Cart = await CartModel.find({ User: id }).populate([
      {
        path: "Cart_Products.P_id ",
        model: "Product",
        populate: {
          path: "Offer_id",
        },
      },
    ]);

    if (Cart == "") {
      res.send({ message: "Cart data not found" });
    } else {
      var data = {
        OrderDetailId: Cart[0].Cart_Products[0]._id,
        Cart_Products: Cart[0].Cart_Products,
      };
      // res.send(data);
      try {
        // save Order Details
        const Order = new OrderModel.OrderDetailsModel(data, "");
        // const result = await Order.save();
        var total = 0.0;

        for (var i of Cart[0].Cart_Products) {
          const Product = await ProductModel.findById(i.P_id);
          if (Product.Qty >= i.Products_qty) {
            const Product1 = await ProductModel.findOneAndUpdate(
              { _id: i.P_id },
              { Qty: Product.Qty - i.Products_qty }
            );
            if (i.P_id.Offer_id == null) {
              total += i.P_id.Price * i.Products_qty;
            } else {
              total += i.P_id.Price * i.Products_qty;
              total -= total * (i.P_id.Offer_id.Offer_pct / 100);
            }
          } else {
            res.status(200).send("out of stock");
          }
        }

        var odata = req.body;
        odata["User"] = user[0];
        odata["OrderDetail"] = Order;
        odata["Total_Price"] = total;
        // save Order
        const Order1 = new OrderModel.OrderModel(odata);
        const orderresult = await Order1.save();
        const Cartrem = await CartModel.findOneAndRemove({ User: id });

        res.status(200).send("success");
      } catch (e) {
        res.send(e.message);
      }
    }
  }
}

module.exports = OrderDomain;
