

const express = require('express');
const app = express();
const fs = require('fs');
const router = express.Router();
app.use(express.json());

const jwt = require('jsonwebtoken');
global.config = require('../config/config');
// var verifyToken = require('./verify.js');

router.post('/', function (req, res, next) {
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

module.exports = router;
