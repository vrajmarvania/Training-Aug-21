const StudentModel = require("../models/student.model");

class StudentDomain {

  //To get all Students ------------------------------------>
  async getAllDctors(req, res) {
    const Students = await StudentModel.find();
    res.send(Students);
  }

  // To get Student ------------------------------------>
  async getStudent(req, res) {
    let id = req.params.DoctId;
    const Student = await StudentModel.findById(id);
    if (Student) {
      res.send(Student);
    } else {
      res.status(404).send("Student Not Found");
    }
  }
  
  //To Insert Student ------------------------------------>
  async insertStudent(req, res) {
    //getting user input
    let data = req.body;
    console.log("result")

    const Student = new StudentModel(data);
    console.log(Student)

    try {
      console.log("1")

      const result = await Student.save();
      console.log("2")
      console.log(result)

      res.send(result);
    } catch (e) {
      res.send(e.message);
    }
  }
  //To delete a Student ------------------------------------>
  async deleteStudent(req, res) {
    let _id = req.params.Id;
    const Student = await StudentModel.findByIdAndUpdate(_id,{ "isdeleted": true});
    if (Student) {
      res.send("Student Record Deleted Successfully");
    } else {
      res.status(404).send("Data Not Found");
    }
  }
  //To update an employee ------------------------------------>
  
  
  async updateStudent(req, res) {
    let data = req.body;
    let id = req.body._id;
    const Student = await StudentModel.find();
    let isAvail = Student.find((e) => e.id == id);

    if (isAvail) {
      try {
        const result = await StudentModel.findByIdAndUpdate(
          id,
          {
            $set: data,
          },
          { new: true }
        );
        consoel.log(result)
        res.send(result);
      } catch (e) {
        res.send(e.message);
      }
    } else {
      res.status(404).send("Product Not Found");
    }
  }

  // async getSummary(req, res) {
  //   let id = req.params.DoctId;
  //   const Students = await StudentModel.findById(id).populate("department").populate("patient.patientid")


  //   if (Students) {
  //     res.send(Students);
  //   } else {
  //     res.status(404).send("Student Not Found");
  //   }
  // }
}

module.exports = StudentDomain;
