
const express = require('express');
const app = express();
const fs = require('fs');
const router = express.Router();
const verify = require('../middelware/verify');

app.use(express.json());
// console.log(verify)
router.get('/',verify.verifyEmployeeToken, (req, res, next) => {
    fs.readFile('./data/Empdata.json', 'utf8', (err, data) => {
        let dat = JSON.parse(data);
        res.send(dat);
        next();
    })

});

router.get('/:id',verify.verifyEmployeeToken, (req, res, next) => {
    const id = req.params.id;
    fs.readFile('./data/Empdata.json', 'utf8', (err, data) => {
        console.log(data);
        let dat = JSON.parse(data);
        const emp = dat.find(emp => emp.Id == id);
        res.send(emp);
        next();
    });

});

// update 
router.put('/:id',verify.verifyEmployeeToken, [express.json()], (req, res, next) => {
    const id = req.params.id;
    let empId = req.body.Id;
    let FirstName = req.body.FirstName;


    fs.readFile('./data/Empdata.json', 'utf8', (err, data) => {
        let dat = JSON.parse(data);
        const emp = dat.find(emp => emp.Id == id);
        emp.Id = empId;
        emp.FirstName = FirstName;

        fs.writeFile('./data/Empdata.json', JSON.stringify(dat), (err) => {
            if (err) throw err;
        });
        res.send('data updated successfully');
        next();

    });
})


// get an Assignments API

router.get('/:id/child/assignments/:aid',verify.verifyEmployeeToken, (req, res, next) => {
    const id = req.params.id;
    const aid = req.params.aid;

    fs.readFile('./data/Empdata.json', 'utf8', (err, data) => {
        console.log(data);
        let dat = JSON.parse(data);
        const emp = dat.find(emp => emp.Id == id);
        res.send(emp.Assignments.find(e => e.AssignmentId == aid));
        next();
    });
});


// update 
router.put('/:id/child/assignments/',verify.verifyEmployeeToken, [express.json()], (req, res, next) => {
    let id = req.params.id;

    // let empId = req.body.;
    // let FirstName = req.body.FirstName;


    fs.readFile('./data/Empdata.json', 'utf8', (err, data) => {
        let dat = JSON.parse(data);
        let emp = dat.find(emp => emp.Id == id);
        let pdata = emp.Assignments.find(e => e.AssignmentId == req.body.AssignmentId)

        pdata.AssignmentName = req.body.AssignmentName
        pdata.AssignmentNumber = req.body.AssignmentNumber
        fs.writeFile('./data/Empdata.json', JSON.stringify(dat), (err) => {
            if (err) throw err;
        });
        res.send('data updated successfully');
        next();

    });
})


// Create an Assignments API
router.post('/:id/child/assignments/',verify.verifyEmployeeToken, [express.json()], (req, res, next) => {
    let id = req.params.id;
    fs.readFile('./data/Empdata.json', 'utf8', (err, data) => {
        let dat = JSON.parse(data);
        let emp = dat.find(emp => emp.Id == id);
        emp.Assignments.push(req.body)
        console.log(emp.Assignments)
        fs.writeFile('./data/Empdata.json', JSON.stringify(dat), (err) => {
            if (err) throw err;
        });
        res.send(dat);
        next();

    });
})
module.exports = router;


