const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
{
    "ID": {
      "type": "Number",
      required: true,
      min:0
    },
    "Name": {
      "type": "String",
      required: true,
      maxlength:100
    },
    "Address": {
      "type": "String",
      maxlength:500
    },
    "Fees": {
      "Amount": {
        "type": "Number",
        required: true,
        min:0
      },
      "PaymentDate": {
        "type": "Date",
        required: true
      },
      "Status": {
        "type": "String",
        required: true,
        maxlength:100
      }
    },
    "Result": {
      "Hindi": {
        "type": "Number",
        min:0,
        max:100
      },
      "Eng": {
        "type": "Number",
        min:0,
        max:100
      },
      "Math": {
        "type": "Number",
        min:0,
        max:100
      },
      "Total": {
        "type": "Number",
        required: true,
        min:0,
        max:100
      },
      "Grade": {
        "type": "String",
        required: true
      }
    }
  })


  
const student = mongoose.model("student", studentSchema);


module.exports = student;
