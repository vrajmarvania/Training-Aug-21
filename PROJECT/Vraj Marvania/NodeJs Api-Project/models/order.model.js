const mongoose = require("mongoose");
const a = require("../models/user.model");

// OrderDetailsSchema------------------------------------->
const OrderDetailsSchema = new mongoose.Schema({
  OrderDetailId: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
  Cart_Products: [{
          P_id: { type: Object },
          Products_qty: { type: Number }
   }],
  Total_price: { type: Number },
});

const OrderDetailsModel = mongoose.model("OrderDetails", OrderDetailsSchema);

// user Schema====================================================>
const user = new mongoose.Schema({
  id: {
    type: String,
    unique:false,

  },
  First_Name: {
    type: String,
    required: true,
    max: 50,
  },
  Last_Name: {
    type: String,
    required: true,
    max: 50,
  },
  Email: {
    type: String,
    max: 100
  },
  //TYPE---->> 1=user// 2=admin
  Type: {
    type: Number,
    enum: [1, 2],
    required: true,
  },
});

// Order Schema===================================================>

const OrderSchema = new mongoose.Schema({
  OrderId: {
    type: Number,
    unique: true,
    required: true,
  },
  User: user,
  order_date: { type: Date, default: Date.now },
  OrderDetail: OrderDetailsSchema,
  Total_Price: {
    type: Number,
    min: 0,
    required: true,
  },
  Phone_No: {
    type: Number,
    required: true,
  },
  Payment_Id: {
    type: Number,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
  State: {
    type: String,
    required: true,
  },
  Pincode: {
    type: Number,
    required: true,
  },
  IsDeleted: {
    type: Boolean,
    default: 0,
  },
});


//Indexes----------------->
// OrderSchema.index({ OrderId: 1 }); // schema level

const OrderModel = mongoose.model("Orders", OrderSchema);

module.exports = { OrderDetailsModel, OrderModel };





// data ----------------------------->
// {  "OrderId":232323 ,
// "order_date":"20/20/2000" ,
// "Phone_No":848484484,
// "Payment_Id":"121212",
// "Address":"kalindri",
// "City": "raj",
// "State":"guj",
// "Pincode":"360005"

// }
