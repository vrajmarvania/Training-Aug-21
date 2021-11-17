
var express = require('express')

const app = express();
app.use(express.json());
const router = express.Router();
const fs = require('fs');
const verify = require('../middelware/verify');
const employeeModel = require("../model/employee.model");


const jwt = require('jsonwebtoken');
global.config = require('../config/config');

app.get('/',verify.verifyStudentToken,(req,res)=>{
    fs.readFile('./data/Studentdata.json', 'utf8', (err, data) => {
      let dat = JSON.parse(data);
      res.send(dat);
  })
})



app.get('/:id',verify.verifyStudentToken,(req,res)=>{
    
    fs.readFile('./data/Studentdata.json', 'utf8', (err, data) => {
      let dat = JSON.parse(data);
      var s=dat.find(c => c.ID == parseInt(req.params.id))
    res.send(s)
  })
})

app.get('/:id/Fees',verify.verifyStudentToken,(req,res)=>{
   

    fs.readFile('./data/Studentdata.json', 'utf8', (err, data) => {
      let dat = JSON.parse(data);
      var s=dat.find(c => c.ID == parseInt(req.params.id))
    res.send(s.Fees)
  })
})

app.get('/:id/result',verify.verifyStudentToken,(req,res)=>{
    
    fs.readFile('./data/Studentdata.json', 'utf8', (err, data) => {
      let dat = JSON.parse(data);
      var s=dat.find(c => c.ID == parseInt(req.params.id))
      res.send(s.Result)
  })
})

app.put('/:id',verify.verifyStudentToken,(req,res)=>{

   fs.readFile('./data/Studentdata.json', 'utf8', (err, data) => {
      let dat = JSON.parse(data);
      var s=dat.find(c => c.ID == parseInt(req.params.id))
      s.Result.Hindi= req.body.Hindi
      s.Result.Eng= req.body.Eng

    fs.writeFile('./data/Studentdata.json', JSON.stringify(dat), (err) => {
      if (err) throw err;
  });
    res.send(s)
  })
    
})


module.exports = app;
