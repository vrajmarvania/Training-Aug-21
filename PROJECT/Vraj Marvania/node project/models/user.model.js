const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
  id: {
    type: String,
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
    required: true,
    max: 100,
  },
  Password: {
    type: String,
  },
  //TYPE---->> 1=user// 2=admin
  Type: {
    type: Number,
    enum: [1, 2],
    required: true,
  },
  IsDeleted: { type: Boolean, default: 0 },
});

const UserModel = mongoose.model("user", RegisterSchema);
module.exports = { UserModel, RegisterSchema };
// module.exports = ;
