const CartModel = require("../models/Cart.model");
const jwt = require("jsonwebtoken");
global.config = require("../config/config");

class CartDomain {

  // get AllProduct----------------------->
  async getcartdata(req, res) {
    const token = req.headers["authorization"];
    console.log(
      jwt.verify(token, global.config.secretKey, {
        algorithm: global.config.algorithm,
      })
    );
    const Cart = await CartModel.find().populate("Cart_Products._id"); //.populate({ path: 'Product', model: Conversation });
    res.send(Cart);
  }


  // insert Product------------------------------>
  async insertCart(req, res) {
    const token = req.headers["authorization"];
    var id = jwt.verify(token, global.config.secretKey, {
      algorithm: global.config.algorithm,
    }).id;
    const query = { User: id };
    var a = await CartModel.find(query);
    if (a != "") 
    {
      var avail = await CartModel.count({User: id,"Cart_Products.P_id": { $in: req.body.Cart_Products[0].P_id },});
      if (avail == 0) 
      {
        const query = { User: id };
        const resul = await CartModel.findOneAndUpdate(query, {
          $push: { Cart_Products: req.body.Cart_Products },
          $set: { Total_price: req.body.Total_price },
        });
        res.send(resul);
      } 
      else {
        res.send("all ready avil");
      }
    }
    else {
      let data = {
        User: id,
        Cart_Products: req.body.Cart_Products,
        Total_price: req.body.Total_price,
      };
      const Cart = new CartModel(data);
      try {
        const result = await Cart.save();
        res.send(result);
      } catch (e) {
        res.send(e.message);
      }
    }
  }


  // Remove product from cart---------------------->
  async Remove(req, res) {
    const token = req.headers["authorization"];
    var id = jwt.verify(token, global.config.secretKey, {
      algorithm: global.config.algorithm,
    }).id;
    var avail = await CartModel.updateOne(
      { User: id },
      {
        $pull: {
          Cart_Products: { P_id: { $in: req.body.Cart_Products[0].P_id } },
        },
        $set: { Total_price: req.body.Total_price },
      }
    );
    res.send(avail);
  }
}

module.exports = CartDomain;
