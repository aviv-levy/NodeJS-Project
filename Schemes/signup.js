
const Router = require("express").Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
Router.use(bodyParser.json())
Router.use(bodyParser.urlencoded({ extended: true }));

const userSchema = new mongoose.Schema({
    username:String,
    name: String,
    lastname: String,
    email: String,
    password: String,
    permission: Number,
  
  });

Router.post("/register", async (req, res) => {
    let {username,name,lastname,email,password,permission} = req.body;
    const Usermodel = mongoose.model("user", userSchema);
    const user = new Usermodel({
        username: username,
        name: name,
        lastname: lastname,
        email: email,
        password: password,
        permission: permission
    })
    await user.save();
  });

Router.get("/register", (req,res) =>{
    res.render('signup.ejs');
})

  module.exports = Router;