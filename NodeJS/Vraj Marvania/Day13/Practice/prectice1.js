const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/demo1')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const   student = mongoose.model('student', new mongoose.Schema({
  name: String,
  id: String,
  rno: String
}));

const Course = mongoose.model('Course', new mongoose.Schema({
  class_name: String,
    student_data: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'student'
  }
}));

async function createStudent(name, id, rno) { 
  const student = new Student({
    name,id, 
    rno 
  });

  const result = await student.save();
  console.log(result);
}

async function createCourse(name, Course) {
  const course = new Course({
    name, 
    author
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listclass() { 
  const courses = await Course
    .find()
    .populate('student')
  console.log(courses);
}

// createStudent('vraj', '11', '22');
// createCourse('10th', '607fa4f458939857d09676ee')

listclass();