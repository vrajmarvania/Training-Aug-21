
var express = require('express')
const app = express();
const router = express.Router();
const fs = require('fs');
const verify = require('../middelware/verify');
const mongoose = require("mongoose");
const studentModel = require("../model/student.model");

app.use(express.json());


async function getstudent(req, res) {
  const docs = await studentModel.find();
  res.send(docs);
  res.end();
}

async function getstudentbyid(req, res) {
  const id = req.params.id;
  const docs = await studentModel.findOne({ ID: id })
  res.send(docs);
  res.end();
}


async function getfees(req, res) {
  const id = req.params.id;
  const docs = await studentModel.findOne({ ID: id })
  res.send(docs.Fees);
  res.end();
}


async function getresult(req, res) {
  const id = req.params.id;
  const docs = await studentModel.findOne({ ID: id })
  res.send(docs.Result);
  res.end();
}


async function updatestudent(req, res) {
  const id = req.params.id;
  console.log("_____")
  stu = await studentModel.updateOne(
    { ID: `${id}` },
    { $set: { "Result.$[elem].Hindi": req.body.Result.Hindi } },
  );
  console.log( req.body.Result.Hindi )
  res.send(stu);
  res.end();
}


const jwt = require('jsonwebtoken');
global.config = require('../config/config');

app.get('/', verify.verifyStudentToken, (req, res) => { getstudent(req, res) })

app.get('/:id', verify.verifyStudentToken, (req, res) => { getstudentbyid(req, res) })

app.get('/:id/Fees', verify.verifyStudentToken, (req, res) => { getfees(req, res) })

app.get('/:id/result', verify.verifyStudentToken, (req, res) => { getresult(req, res) })

app.put('/:id', verify.verifyStudentToken, (req, res) => { updatestudent(req, res) })


module.exports = app;
