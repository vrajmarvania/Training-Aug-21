
const express = require('express');
const app = express();
const fs = require('fs');
const router = express.Router();
app.use(express.json());

//get
router.get('/', (req, res, next) => {
    fs.readFile('./data.json', 'utf8', (err, data) => {
        let dat = JSON.parse(data);
        res.send(dat);
        next();
    })

});


//get by id
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    fs.readFile('./data.json', 'utf8', (err, data) => {
        console.log(data);
        let dat = JSON.parse(data);
        const emp = dat.find(emp => emp.Id == id);
        res.send(emp);
        next();
    });

});

// update 
router.put('/:id', [express.json()], (req, res, next) => {
    const id = req.params.id;
    let empId = req.body.Id;
    let FirstName = req.body.FirstName;


    fs.readFile('./data.json', 'utf8', (err, data) => {
        let dat = JSON.parse(data);
        const emp = dat.find(emp => emp.Id == id);
        emp.Id = empId;
        emp.FirstName = FirstName;

        fs.writeFile('./data.json', JSON.stringify(dat), (err) => {
            if (err) throw err;
        });
        res.send('data updated successfully');
        next();

    });
})


// get an Assignments API
router.get('/:id/child/assignments/:aid', (req, res, next) => {
    const id = req.params.id;
    const aid = req.params.aid;

    fs.readFile('./data.json', 'utf8', (err, data) => {
        console.log(data);
        let dat = JSON.parse(data);
        const emp = dat.find(emp => emp.Id == id);
        res.send(emp.Assignments.find(e => e.AssignmentId == aid));
        next();
    });
});


// update assignments
router.put('/:id/child/assignments/', [express.json()], (req, res, next) => {
    let id = req.params.id;

    // let empId = req.body.;
    // let FirstName = req.body.FirstName;


    fs.readFile('./data.json', 'utf8', (err, data) => {
        let dat = JSON.parse(data);
        let emp = dat.find(emp => emp.Id == id);
        let pdata = emp.Assignments.find(e => e.AssignmentId == req.body.AssignmentId)

        pdata.AssignmentName = req.body.AssignmentName
        pdata.AssignmentNumber = req.body.AssignmentNumber
        fs.writeFile('./data.json', JSON.stringify(dat), (err) => {
            if (err) throw err;
        });
        res.send('data updated successfully');
        next();

    });
})


// Create an Assignments API
router.post('/:id/child/assignments/', [express.json()], (req, res, next) => {
    let id = req.params.id;
    fs.readFile('./data.json', 'utf8', (err, data) => {
        let dat = JSON.parse(data);
        let emp = dat.find(emp => emp.Id == id);
        emp.Assignments.push(req.body)
        console.log(emp.Assignments)
        fs.writeFile('./data.json', JSON.stringify(dat), (err) => {
            if (err) throw err;
        });
        res.send(dat);
        next();

    });
})

module.exports = router;


