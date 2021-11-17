const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
    "Id": {
      "type": "Number"
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
      "type": "String"
    },
    "directReports": {
      "type": [
        "String"
      ]
    },
    "DisplayName": {
      "type": "String"
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
      "type": "String"
    },
    "Gender": {
      "type": "String"
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
      "type": "String"
    },
    "NameSuffix": {
      "type": "String"
    },
    "NationalId": {
      "type": "Number"
    },
    "NationalIdCountry": {
      "type": "Number"
    }
  });


const employee = mongoose.model("employee", empSchema);


module.exports = employee;
