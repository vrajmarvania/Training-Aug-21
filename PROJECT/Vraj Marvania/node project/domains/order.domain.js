const  OrderModel = require("../models/order.model");
const CartModel = require("../models/Cart.model");
const jwt = require('jsonwebtoken');
global.config = require('../config/config');
const a = require("../models/user.model");
// console.log(a.RegisterSchema)


class OrderDomain {
  // get all order details
  async getAllOrder(req, res) {
    var Order =await OrderModel.OrderModel.find()
    res.send(Order);
  }

  // insert  order details
  async SetOrder(req, res) {
      // find userid from token
      const token = req.headers['authorization'];
      var id=(jwt.verify(token,global.config.secretKey,{algorithm: global.config.algorithm})).id
      const user = await a.UserModel.find({"_id":id},'First_Name Last_Name Email Type')

      // cart --> OrderDetails 
     
      const Cart = await CartModel.find({User:id}).populate("Cart_Products.P_id");
      console.log(Cart=="")
      if(Cart=="")
      {
        res.send({"message":"Cart data not found"})
      }
      else{
      var data={
       "OrderDetailId":Cart[0].Cart_Products[0]._id,
       "Cart_Products":[{"P_id":Cart[0].Cart_Products,}]}
      try {
      // save Order Details 
        const Order = new OrderModel.OrderDetailsModel(data,'');
        // const result = await Order.save();
        var odata=req.body
        odata["User"]=user[0]
        odata["OrderDetail"]=Order
        odata["Total_Price"]=Cart[0].Total_price

      // save Order  
        const Order1 = new OrderModel.OrderModel(odata);
        const orderresult = await Order1.save();
        const Cartrem = await CartModel.findOneAndRemove({User:id});

        
        res.send("success");
      }
      
      catch (e) {
        res.send(e.message);
      }
    }}
}



module.exports = OrderDomain;
