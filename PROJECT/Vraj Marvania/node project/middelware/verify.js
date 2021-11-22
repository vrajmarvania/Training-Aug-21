const jwt = require('jsonwebtoken');
global.config = require('../config/config');


function verifyToken(req,res,next){
    console.log('token')

    const token = req.headers['authorization'];
    const type = req.headers['type'];

    console.log(type)
    if (token == null ) return res.sendStatus(401);
    jwt.verify(token,global.config.secretKey,{algorithm: global.config.algorithm},(err,decoded)=>{
        if(err){console.log(err)}
        else{req.decoded=decoded;next();}
    });
}
function check_user(req,res,next){

    const token = req.headers['authorization'];
    var id=(jwt.verify(token,global.config.secretKey,{algorithm: global.config.algorithm})).Type
    if(id!=2){res.send(404,"admin not found")}
    else{console.log("success"),next();}
   
}

// check_user()
module.exports = {verifyToken,check_user};