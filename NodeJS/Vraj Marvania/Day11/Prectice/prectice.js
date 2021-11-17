var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/')
.then(()=>console.log('connected...'))
.catch((error)=>console.error("errore not connetede....",error))

const empSchema = new mongoose.Schema({
    ID: String,

    Name: String,
    Address: String,
    skills:[String]
})

const Empdata = mongoose.model('Empdata',empSchema);


async function demo(){

    // Comparison Query Operator ------------------------->

     query = await Empdata.find({ID:{ $eq: '5'}});
     query = await Empdata.find({ID:{ $gt: '2'}});
     query = await Empdata.find({ID:{ $gte: '2'}});
    query = await Empdata.find({ID:{ $in: ['1','3','5']}});
    query = await Empdata.find({ID:{ $lt: '3'}});
    query = await Empdata.find({ID:{ $lte: '3'}});
    query = await Empdata.find({ID:{ $ne: '3'}});


    // Logical Query Operator----------------------->
        query = await Empdata.find({ $and :[{ID:{ $gt: '3'}},{Name:'vraj marvania'}]});
        query = await Empdata.find({ $not :{ID:{ $gt: '3'}}});
        query = await Empdata.find({ $nor :[{ID:{ $gt: '3'}},{Name:'vraj marvania'}]});
        query = await Empdata.find({ $or :[{ID:{ $gt: '3'}},{Name:'vraj marvania'}]});


    // count    
        query = await Empdata.count({ $or :[{ID:{ $gt: '3'}},{Name:'vraj marvania'}]});
        query = await Empdata.find({ID:{ $gt: '3'}}).count()

    // Pagination    
        query = await Empdata.find().limit (2)
        query = await Empdata.find().skip(1)
        query = await Empdata.find ( { }, { ID: {$slice: [3, 4] } } )
        query = await Empdata.find () .min ( { ID:3 } ).max ( { ID:4 } )


    console.log(query)
    }
    demo()



    // async function createEmp(){
    //     const Empdata1 = new Empdata({
    //         ID: 01,
    //         Name: "vraj marvania",
    //         Address:"shiv nager road jc",
    //         skills: ['react','node','python','java','c','c++'],
    //     })
    //     const result = await Empdata1.save();
    //     console.log(result);
    // }
    
    // createEmp();