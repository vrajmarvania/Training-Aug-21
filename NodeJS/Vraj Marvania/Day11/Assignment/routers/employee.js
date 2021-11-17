
const express = require('express');
const app = express();
const fs = require('fs');
const router = express.Router();
const verify = require('../middelware/verify');
const mongoose = require("mongoose");
const employeeModel = require("../model/employee.model.js");

async function getemp(req, res) {
    const docs = await employeeModel.find();
    res.send(docs);
    res.end();
}

async function getempbyid(req, res) {
    const id = req.params.id;
    const docs = await employeeModel.find({ Id: id })
    res.send(docs);
    res.end();
}

async function getAssignment(req, res) {
    const id = req.params.id;

    const docs = await employeeModel.findOne({ Id: id }, { Assignments: { $elemMatch: { AssignmentId: parseInt(req.params.aid) } } })
    res.send(docs);
    res.end();
}

async function postassignments(req, res) {
    const id = req.params.id;
    stu = await employeeModel.update(
        { ID: id },
        { $push: { Assignments: req.body } }),
        res.send(stu);
    res.end();
}

async function updateemp(req, res) {

    const id = req.params.id;
    stu = await employeeModel.updateOne(
        { Id: `${id}` },
        { $set: { FirstName: req.body.FirstName, Gender: req.body.Gender } },
    );
    res.send(stu);
    res.end();
};

async function updateassignments(req, res) {
    const id = req.params.id;
    const aid = req.params.aid;
    stu = await employeeModel.updateOne({ $and: [{ Id: id }, { "Assignments.AssignmentId": parseInt(aid) }] }, {
        $set: { "Assignments.$": req.body }
    }),
    res.send(stu);
    res.end();
};


app.use(express.json());


router.get('/', verify.verifyEmployeeToken, (req, res, next) => { getemp(req, res) });
router.get('/:id', verify.verifyEmployeeToken, (req, res, next) => { getempbyid(req, res) });
router.get('/:id/child/assignments/:aid', verify.verifyEmployeeToken, (req, res, next) => { getAssignment(req, res), next(); });
router.put('/:id', verify.verifyEmployeeToken, [express.json()], (req, res, next) => { updateemp(req, res) })
router.put('/:id/child/assignments/:aid', verify.verifyEmployeeToken, [express.json()], (req, res, next) => { updateassignments(req, res) })
router.post('/:id/child/assignments/', verify.verifyEmployeeToken, [express.json()], (req, res, next) => { postassignments(req, res) });

module.exports = router;


