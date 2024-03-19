import mongoose from "mongoose";

const Student = mongoose.model(
  'Student',
  {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
  }
  // ,'studentData'
)

await mongoose.connect(
  'mongodb://127.0.0.1:27017/ICS',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

console.log("Running...");

// var student = await Student.find({ lname: "Wilma" });
// console.log(student);


// const newStudent = new Student({
//   stdnum: '007',
//   fname: 'Juan',
//   lname: 'Dela Cruz',
//   age: 20
// });

// await newStudent.save()

var student = await Student.find({ lname: "Dela Cruz" });
student.stdnum = '123';
await student.save();
console.log(student);