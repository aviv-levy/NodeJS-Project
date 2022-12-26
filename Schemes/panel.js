const Router = require("express").Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
Router.use(bodyParser.json())
Router.use(bodyParser.urlencoded({ extended: true }));

const studentSchema = new mongoose.Schema({
    name:String,
    lastname: String,
    age: Number,
    class_id: String,
    grades: Array,
    assist: Boolean
  });

const classSchema = new mongoose.Schema({
    classroom:String,
    teacher_id: String

  });


Router.get('/',(req,res)=>{
    res.render('panel.ejs');
})

Router.post('/addStudent',async(req,res)=>{
    console.log('Student added');
    let {student_name,student_lastname,age,classroom} = req.body;
    const Studentmodel = mongoose.model("student", studentSchema);
    const student = new Studentmodel({
        name: student_name,
        lastname: student_lastname,
        age: age,
        class_id: classroom,
        grades: [],
        assist: false
    })
    await student.save();
})
Router.post('/addClass',async(req,res)=>{
    console.log('Class added');
    let {class_name} = req.body;
    console.log(class_name);
    const classmodel = mongoose.model("classe", classSchema);
    const classroom = new classmodel({
        classroom: class_name,
        teacher_id: 'avivl',
    })
    await classroom.save();
})


module.exports = Router;