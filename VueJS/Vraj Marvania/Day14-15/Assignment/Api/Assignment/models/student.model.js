const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  Name: {
    First: { type: String },
    Middle: { type: String },
    Last: { type: String },
  },
  DOB: { type: Date },
  Place_of_Birth: { type: String },
  First_Language: { type: String },

  
  Address: {
    City: { type: String },
    State: { type: String },
    Country: { type: String },
    Pin: { type: String },
  },
  Father: {
    FullName: {
      First: { type: String },
      Middle: { type: String },
      Last: { type: String },
    },
    Email: { type: String },
    Education_Qualification: { type: String },
    Profession: { type: String },
    Designation: { type: String },
    Phone: { type: String },
  },
  
  Mother: {
    FullName: {
      First: { type: String },
      Middle: { type: String },
      Last: { type: String },
    },
    Email: { type: String },
    Education_Qualification: { type: String },
    Profession: { type: String },
    Designation: { type: String },
    Phone: { type: String },
  },
  Emergency:{
      Emergency_Relation: { type: String },
      Emergency_Number: { type: String },
      Reference_Details: { type: String },
      FirstName: { type: String },
      Reference_Through: { type: String },
      Address: { type: String },
      Tel_No: { type: String },
    },
  isdeleted: { type: Boolean, default: 0 },
});


// {
//   Name: { First: 'vraj', Middle: 'asasasasa', Last: 'marvania' },
//   DOB: 2222-02-22T00:00:00.000Z,
//   First_Language: '2',
//   Address: {
//     City: 'rajkot',
//     State: 'gujarat',
//     Country: 'India',
//     Pin: 'vraj.marvania@gmail.com'
//   },
//   Father: {
//     FullName: { First: 'vraj', Middle: 'asasa', Last: 'marvania' },
//     Email: 'vraj.marvania@gmail.com',
//     Education_Qualification: 'StudentList.Place_Of_Birth',
//     Profession: 'StudentList.Place_Of_Birth',
//     Designation: 'StudentList.Place_Of_Birth',
//     Phone: '09664949904'
//   },
//   Mother: {
//     FullName: { First: 'vraj', Middle: 'vraj', Last: 'marvania' },
//     Email: 'vraj.marvania@gmail.com',
//     Education_Qualification: 'vraj',
//     Profession: 'vrajvrajvraj',
//     Designation: 'vrajvrajvraj',
//     Phone: '09664949904'
//   },
//   Emergency: {
//     Emergency_Number: 'vrajvraj',
//     Reference_Details: 'vrajvrajvraj',
//     FirstName: 'vrajvrajvraj',
//     Reference_Through: 'vrajvrajvrajvraj',
//     Address: 'kalindri harinager main road ,near university road ,rajkot',
//     Tel_No: 'sasaasas'
//   },
//   isdeleted: false
// }



    // departmentsid
    const StudentModel = mongoose.model("Student", StudentSchema);

    module.exports = StudentModel;





// {
//   Name: { First: 'vraj', Middle: 'asasasasa', Last: 'marvania' },
//   DOB: 2222-02-22T00:00:00.000Z,
//   First_Language: '2',
//   Address: {
//     City: 'rajkot',
//     State: 'gujarat',
//     Country: 'India',
//     Pin: 'vraj.marvania@gmail.com'
//   },
//   Father: {
//     FullName: { First: 'vraj', Middle: 'asasa', Last: 'marvania' },
//     Email: 'vraj.marvania@gmail.com',
//     Education_Qualification: 'StudentList.Place_Of_Birth',
//     Profession: 'StudentList.Place_Of_Birth',
//     Designation: 'StudentList.Place_Of_Birth',
//     Phone: '09664949904'
//   },
//   Mother: {
//     FullName: { First: 'vraj', Middle: 'vraj', Last: 'marvania' },
//     Email: 'vraj.marvania@gmail.com',
//     Education_Qualification: 'vraj',
//     Profession: 'vrajvrajvraj',
//     Designation: 'vrajvrajvraj',
//     Phone: '09664949904'
//   },
//   Emergency: [
//     {
//       Emergency_Number: 'vrajvraj',
//       Reference_Details: 'vrajvrajvraj',
//       FirstName: 'vrajvrajvraj',
//       Reference_Through: 'vrajvrajvrajvraj',
//       Address: 'kalindri harinager main road ,near university road ,rajkot',
//       Tel_No: 'sasaasas',
//     }
//   ],
//   isdeleted: false
// }