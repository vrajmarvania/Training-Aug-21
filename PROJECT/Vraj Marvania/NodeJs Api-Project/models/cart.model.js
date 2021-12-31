const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  User: {
    type: mongoose.Schema.Types.ObjectId,
    unique: true,
    required: true,
    ref: "user",
  },

  Cart_Products: [
    {
      P_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        ref:"offer"
      },
      Products_qty: {
          type: Number,
      }  
    },
  ],
  Total_price: {
    type: Number,
  },
  IsDeleted: {
    type: Boolean,
    default: 0,
  },
});

const CartModel = mongoose.model("Cart", CartSchema);

module.exports = CartModel;
