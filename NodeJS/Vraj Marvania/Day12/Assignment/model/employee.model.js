const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
    "Id": {
      "type": "Number",
      required: true

    },
    "Address": {
      "line1": {
        "type": "String",
        required: true
      },
      "line2": {
        "type": "String"
      },
      "line3": {
        "type": "String"
      }
    },
    "Assignments": {
      "type": [
        "Mixed"
      ]
    },
    "citizenshipID": {
      "type": "Number",
      required: true,
      min:0
    },
    "CitizenshipLegislationCode": {
      "type": "String"
    },
    "CitizenshipStatus": {
      "type": "String"
    },
    "CitizenshipToDate": {
      "type": "Date"
    },
    "City": {
      "type": "String",
      maxlength:100
    },
    "CorrespondenceLanguage": {
      "type": "String",
      maxlength:100
    },
    "Country": {
      "type": "String",
      maxlength:100
    },
    "CreationDate": {
      "type": "String"
    },
    "DateOfBirth": {
      "type": "String",
      required: true
    },
    "directReports": {
      "type": [
        "String"
        
      ],maxlength:100

    },
    "DisplayName": {
      "type": "String"
    },
    "DriversLicenseExpirationDate": {
      "type": "String"
    },
    "DriversLicenseId": {
      "type": "Number",
      min:0
    },
    "DriversLicenseIssuingCountry": {
      "type": "String"
    },
    "EffectiveStartDate": {
      "type": "String"
    },
    "FirstName": {
      "type": "String",
      required: true
    },
    "Gender": {
      "type": "String",
      required: true
    },
    "HireDate": {
      "type": "Date",
      required: true
    },
    "HomeFaxAreaCode": {
      "type": "String"
    },
    "HomeFaxCountryCode": {
      "type": "String"
    },
    "HomeFaxExtension": {
      "type": "String"
    },
    "HomeFaxLegislationCode": {
      "type": "String"
    },
    "HomeFaxNumber": {
      "type": "String"
    },
    "LastName": {
      "type": "String",
      required: true,
      maxlength:100
    },
    "LastUpdateDate": {
      "type": "Date"
    },
    "LicenseNumber": {
      "type": "Date"
    },
    "links": {
      "type": [
        "String"
      ]
    },
    "MaritalStatus": {
      "type": "String"
    },
    "MiddleName": {
      "type": "String"
    },
    "NameSuffix": {
      "type": "String"
    },
    "NationalId": {
      "type": "Number",
      min:0
    },
    "NationalIdCountry": {
      "type": "Number",
      required: true,
      min:0
    }
  });


const employee = mongoose.model("employee", empSchema);


module.exports = employee;
