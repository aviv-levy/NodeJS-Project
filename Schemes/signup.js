
const Router = require("express").Router();
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:String,
    name: String,
    lastname: String,
    email: String,
    password: String,
    permission: Number,
  
  });

Router.post("/user", async (req, res) => {
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



  module.exports = Router;