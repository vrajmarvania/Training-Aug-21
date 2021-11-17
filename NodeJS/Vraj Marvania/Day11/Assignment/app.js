const express = require('express');
const app = express();
const Emp= require('./routers/employee');
const Students= require('./routers/Students');
const login= require('./routers/login');

app.use(express.json());

const mongoose = require("mongoose");

var mongoDB = "mongodb://localhost/day11";
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected To MongoDB"));
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));


app.use('/Employees',Emp);
app.use('/Students',Students);
app.use('/login',login);

app.get('/', (req, res) => {
   res.send("hello")
});

app.listen(8000,()=>{
    console.log('listening at port 8000');
})