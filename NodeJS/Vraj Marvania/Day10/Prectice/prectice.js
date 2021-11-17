var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/demo')
.then(()=>console.log('connected...'))
.catch((error)=>console.error("errore not connetede....",error))


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

// createEmp();
// const query = Empdata.find();

async function demo(){
//  query = await Empdata.find();
//  query = await Empdata.findOne();
//  query = await Empdata.findOneAndUpdate({ID : '1'},{skills: ['vrp']});
//  query = await Empdata.findOneAndRemove({ID : '1'});
query =  Empdata.findOneAndReplace({ID : '2'},{ Name: 'vrp'
}); // returns Query


console.log(query)
}
demo()