const port = 3000
require('dotenv').config();

const express = require('express');
const app = express();
const mongoose =  require('mongoose');
const bodyParser = require('body-parser');
const { join } = require("path");


app.use(bodyParser.json())

app.set("views", join(__dirname, "views"));
app.set("view engien", "ejs");
app.use(express.static(__dirname));

async function main() {
    await mongoose
      .connect(process.env.DATABASE)
      .then(() => {
        console.log("conected to Mongo");
      })
      .catch(() => {
        console.log("something in mongo whent wrong");
      });
  }
  
  main();

  const SignUpRoute = require("./Schemes/signup");

  app.use("/signup", SignUpRoute);
  
app.listen(port,()=>{
    console.log('Server is running...');
})