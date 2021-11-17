const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
    "Id": {
      "type": "Number",
      //required: true

    },
    "Address": {
      "line1": {
        "type": "String"
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
      "type": "Number"
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
      "type": "String"
    },
    "CorrespondenceLanguage": {
      "type": "String"
    },
    "Country": {
      "type": "String"
    },
    "CreationDate": {
      "type": "String"
    },
    "DateOfBirth": {
      "type": "String",
      //required: true

    },
    "directReports": {
      "type": [
        "String"
      ]
    },
    "DisplayName": {
      "type": "String",
      //required: true

    },
    "DriversLicenseExpirationDate": {
      "type": "String"
    },
    "DriversLicenseId": {
      "type": "Number"
    },
    "DriversLicenseIssuingCountry": {
      "type": "String"
    },
    "EffectiveStartDate": {
      "type": "String"
    },
    "FirstName": {
      "type": "String",
      //required: true

    },
    "Gender": {
      "type": "String",
      //required: true

    },
    "HireDate": {
      "type": "Date"

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
      "type": "String"
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
      "type": "String",
      //required: true

    },
    "NameSuffix": {
      "type": "String",
      //required: true

    },
    "NationalId": {
      "type": "Number",
      //required: true

    },
    "NationalIdCountry": {
      "type": "Number",
      //required: true

    }
  });


const employee = mongoose.model("employee", empSchema);


module.exports = employee;
