// Collections as follows:
// Students=[{“ID”:1,”Name”:Reena”,”Address”:”Ahmedabad”,”Fees”:{“Amount:10000,”PaymentDate”:”12/12/2020”,”Status”:”true”},”Result”:{“Hindi”:80,”Eng”:70,”Math”:60,”Total”:210,”Grade”:”A”} },{“ID”:2,”Name”:”Rita”,”Address”:”Surat”, ”Fees”:{“Amount:12000,”PaymentDate”:”12/12/2020”,”Status”:”false”}, ”Result”:{“Hindi”:80,”Eng”:70,”Math”:60,”Total”:210,”Grade”:”A”} }]

var express = require('express')
var port = 3000

const app = express();
app.use(express.json());


var Students=[
    {
       "ID":1,
       "Name":"Reena",
       "Address":"Ahmedabad",
       "Fees":{
          "PaymentDate":"12/12/2020",
          "Amount":'10000',

          "Status":"true"
       },
       "Result":{
          "Hindi":80,
          "Eng":70,
          "Math":60,
          "Total":210,
          "Grade":"A"
       }
    },
    {
       "ID":2,
       "Name":"Rita",
       "Address":"Surat",
       "Fees":{
          "PaymentDate":"12/12/2020",
          "Amount":'12000',

          "Status":"false"
       },
       "Result":{
          "Hindi":80,
          "Eng":70,
          "Math":60,
          "Total":210,
          "Grade":"A"
       }
    }
 ]

 // 1. Create a RESTFUL API which will return a Studentlist.
app.get('/students',(req,res)=>{
    res.send(Students)
})

// 2. Create RESTFUL API which will return a Particular Student Record
app.get('/students/:id',(req,res)=>{
    var s=Students.find(c => c.ID == parseInt(req.params.id))
    res.send(s)
})

// 3. Create a RESTFUL API which return a particular student FEES Record. Fees field are http://localhost:3000/students/1/fees
app.get('/students/:id/Fees',(req,res)=>{
    var s=Students.find(c => c.ID == parseInt(req.params.id))
    res.send(s.Fees.Amount)
})

// 4. Create a RESTFUL API which will return a particular student Exam Result. Result Fields are http://localhost:/3000/students/1/result
app.get('/students/:id/result',(req,res)=>{
    var s=Students.find(c => c.ID == parseInt(req.params.id))
    res.send(s.Result)
})


// 5. Create a RESTFUL API which will update a result of result of student id 1. Update the marks for English Subject.
app.put('/students/:id',(req,res)=>{
    var s=Students.find(c => c.ID == parseInt(req.params.id))
    s.Result.Hindi= req.body.Hindi
    s.Result.Eng= req.body.Eng
    res.send(s)
})
app.listen(port,() => console.log(`Listening on port ${port}..`))
