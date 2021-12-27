var express = require("express");
const StudentDomain = require("../domains/student.domain");
var router = express.Router();
const studentDomain = new StudentDomain();

class StudentController {
  //To get all Students
  static async get(req, res) {
    studentDomain.getAllDctors(req, res);
  }
  //to get Student
  static async getStudent(req, res) {
    studentDomain.getStudent(req, res);
  }
  //To insert Student
  static async insertStudent(req, res) {
    studentDomain.insertStudent(req, res);
  }
  //To update Student
  static async updateStudent(req, res) {
    studentDomain.updateStudent(req, res);
  }
  //To delete Student
  static async deleteStudent(req, res) {
    studentDomain.deleteStudent(req, res);
  }
  //To get summary
  // static async getSummary(req, res) {
  //   studentDomain.getSummary(req, res);
  // }

}

//To get all employees
router.get("/", StudentController.get);
//To get an single employee by id
router.get("/:DoctId", StudentController.getStudent);
//To delete an employee
router.delete("/:Id", StudentController.deleteStudent);
//To Create New Employee
router.post("/", StudentController.insertStudent);
//To Update Data Of An Employee
router.put("/", StudentController.updateStudent);

//To get summary
// router.get("/:DoctId/summary", StudentController.getSummary);
//To get patient
// router.get("/:DoctId/patients/:PatId", StudentController.getPatient);

module.exports = router;



