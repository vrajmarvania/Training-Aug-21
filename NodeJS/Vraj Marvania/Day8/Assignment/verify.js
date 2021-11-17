const jwt = require('jsonwebtoken');
const config = require('./config');


function verifyToken(req,res,next){
    console.log('token')

    const token = req.headers['authorization'];
    console.log(token)
    if (token == null) return res.sendStatus(401);
    jwt.verify(token,global.config.secretKey,{algorithm: global.config.algorithm},(err,decoded)=>{
        if(err){console.log(err)}
        else{req.decoded=decoded;next();}
    });
}

module.exports = verifyToken;