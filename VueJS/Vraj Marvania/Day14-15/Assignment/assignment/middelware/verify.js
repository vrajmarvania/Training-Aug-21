const jwt = require('jsonwebtoken');
global.config = require('../config/config');


function verifyEmployeeToken(req,res,next){
    console.log('token')

    const token = req.headers['authorization'];
    const type = req.headers['type'];

    console.log(type)
    if (token == null || type!="emp" ) return res.sendStatus(401);
    jwt.verify(token,global.config.secretKey,{algorithm: global.config.algorithm},(err,decoded)=>{
        if(err){console.log(err)}
        else{req.decoded=decoded;next();}
    });
}
function verifyStudentToken(req,res,next){
    console.log('token')

    const token = req.headers['authorization'];
    const type = req.headers['type'];

    console.log(type)
    if (token == null || type!="Student" ) return res.sendStatus(401);
    jwt.verify(token,global.config.secretKey,{algorithm: global.config.algorithm},(err,decoded)=>{
        if(err){console.log(err)}
        else{req.decoded=decoded;next();}
    });
}

module.exports = {verifyEmployeeToken,verifyStudentToken};