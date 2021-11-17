const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/empcollection')
.then(()=>{
    console.log('connected to mongodb...')
}).catch((err)=>{
    console.log(' not connected ',err)
})

const empSchema = new mongoose.Schema({
    ID: String,
    Name: String,
    Address: String,
    skills:[String]
})

const Empdata = mongoose.model('Empdata',empSchema);

async function createEmp(){
    const Empdata1 = new Empdata({
        ID: 01,
        Name: "vraj marvania",
        Address:"shiv nager road jc",
        skills: ['react','node','python','java','c','c++'],
    })
    const result = await Empdata1.save();
    console.log(result);
}

// createEmp()


// find ------>
Course.find({Name:["vraj marvania"]},(err,docs)=>{
    console.log(docs)
})

// findone  ------>
Course.findOne({skills:'react'},(err,doc)=>{
    console.log(doc);
})

// find by id  ------>
Course.findById('617f9a62ce7a021427a090f5',(err,doc)=>{
    console.log(doc);
})

// find by id and delete ------>
Course.findByIdAndDelete('617f9e694417d8c64331291b',(err,doc)=>{
    console.log('deleted ',doc)
})


// updateone  ------>
Course.updateOne({},{name:"vraj marvania"},(err,doc)=>{
    console.log(doc);
})

// delete one  ------>
Course.deleteOne({id: {$gt: 3}}).then(function(){
    console.log('deleted');
}).catch(function(err){
    console.log(err);
})


// find by id and update  ------>
Course.findByIdAndUpdate('617f9a62ce7a021427a090f5',{name: "vraj"},(err,doc)=>{
    console.log(doc);
})

// findone and update ------>
Course.findOneAndUpdate({name:"vraj marvania"},{name:"demo"},(err,doc)=>{
    console.log(doc);
})