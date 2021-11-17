const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
{
    "ID": {
      "type": "Number",
      required: true
    },
    "Name": {
      "type": "String"
    },
    "Address": {
      "type": "String"
    },
    "Fees": {
      "Amount": {
        "type": "Number",
      },
      "PaymentDate": {
        "type": "Date"
      },
      "Status": {
        "type": "String"
      }
    },
    "Result": {
      "Hindi": {
        "type": "Number"
      },
      "Eng": {
        "type": "Number"
      },
      "Math": {
        "type": "Number"
      },
      "Total": {
        "type": "Number"
      },
      "Grade": {
        "type": "String"
      }
      // ,
      // required: true
    }
  })


  
const student = mongoose.model("student", studentSchema);


module.exports = student;
