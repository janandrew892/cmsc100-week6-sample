import { model } from "mongoose";

function greet(req, res) {
  var name = req.query.name;
  if(!name) {
    res.send('HI!!!');
  }
  else {
    res.send('Hi ' + name + '!!!!');
  }
}

function root() {
  res.send('Hello World!!!!!!!!!!!');
}

async function getStudents(req,res) {
  const Student = model(
    'Student',
    {
      stdnum: String,
      fname: String,
      lname: String,
      age: Number
    }
  );
  var students = await Student.find();
  res.send(students);
}

export { greet, root, getStudents };