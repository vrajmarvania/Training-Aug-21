
const express = require('express');
const app = express();
const fs = require('fs');
const jwt = require('jsonwebtoken');
global.config = require('./config');
var verifyToken = require('./verify.js');
var Students = require('./data.json');
app.use(express.json());


app.post('/login', function (req, res, next) {
    let userdata = {
        username: req.body.username,
        password: req.body.password
    };

    let token = jwt.sign({ username: req.body.username }, global.config.secretKey, {
        algorithm: global.config.algorithm,
        expiresIn: '7d'
    });


    if (userdata.username == "admin" && userdata.password == "admin") {
        res.status(200).json({
            message: 'Login Successful',
            jwtoken: token
        });
    }
    else {
        res.status(401).json({
            message: 'Login Failed',
        });
    }
});




app.get("/", verifyToken, (req, res, next) => {
    res.send("hello")
})
app.get('/students/:id', verifyToken, (req, res) => {
    var s = Students.find(c => c.ID == parseInt(req.params.id))

    res.send(s)
})

app.get('/students/:id/Fees', verifyToken, (req, res) => {
    var s = Students.find(c => c.ID == parseInt(req.params.id))
    res.send(s.Fees)

})

app.get('/students/:id/result', verifyToken, (req, res) => {
    var s = Students.find(c => c.ID == parseInt(req.params.id))
    res.send(s.Result)
})

app.put('/students/:id', verifyToken, (req, res) => {
    var s = Students.find(c => c.ID == parseInt(req.params.id))
    console.log(Students)

    s.Result.Hindi = req.body.Hindi
    s.Result.Eng = req.body.Eng
    console.log(Students)
    fs.writeFile('data.json', JSON.stringify(Students), function (error) {
        console.log(error)
    })
    res.send(s)
})

app.listen(3000, (req, res) => {
    console.log("application stated on port 3000");
})