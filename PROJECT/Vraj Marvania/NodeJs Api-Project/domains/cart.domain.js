const CartModel = require("../models/cart.model");
const jwt = require("jsonwebtoken");
global.config = require("../config/config");

class CartDomain {
  // ===========================================================================
  // getcart
  // access:user & admin
  // ===========================================================================

  async getcart(req, res) {
    const Cart = await CartModel.find().populate([
      {
        path: "Cart_Products.P_id ",
        model: "Product",
        populate: {
          path: "Offer_id",
        },
      },
    ]);
    res.status(200).send(Cart);
  }
  // ===========================================================================
  // insert in cart
  // access:user
  // input: cart data
  // Cart_Products
  // Products_qty
  // Total_price
  // ===========================================================================

  async insertCart(req, res) {
    const token = req.headers["authorization"];
    var id = jwt.verify(token, global.config.secretKey, {
      algorithm: global.config.algorithm,
    }).id;

    const query = { User: id };
    var a = await CartModel.find(query);

    if (a != "") {
      for (var i in req.body.Cart_Products) {
        var avail = await CartModel.find({
          User: id,
          "Cart_Products.P_id": { $in: req.body.Cart_Products[i].P_id },
        });

        if (avail == "") {
          const query = { User: id };
          const resul = await CartModel.findOneAndUpdate(query, {
            $push: { Cart_Products: req.body.Cart_Products[i] },
            $set: { Total_price: req.body.Total_price },
          });
        } else {
          var resup = await CartModel.updateOne(
            {
              User: id,
              "Cart_Products.P_id": { $in: req.body.Cart_Products[i].P_id },
            },
            {
              $set: {
                "Cart_Products.$.Products_qty":
                  req.body.Cart_Products[i].Products_qty,
              },
            }
          );
        }
      }
      res.status(200).send("Successfully Submited");
    } else {
      let data = {
        User: id,
        Cart_Products: req.body.Cart_Products,
        Total_price: req.body.Total_price,
      };
      const Cart = new CartModel(data);
      try {
        const result = await Cart.save();
        res.status(200).send("Successfully Submited");
      } catch (e) {
        res.status(404).send(e.message);
      }
    }
  }

  // ===========================================================================
  // Remove product from cart
  // access:user
  // input:product id
  // ===========================================================================

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
    res.status(200).send(avail);
  }
}

module.exports = CartDomain;
