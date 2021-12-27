var express =require('express')
const mongoose = require("mongoose");
const student = require("./controllers/student.controller");
const cors = require("cors");

const app = express();


app.use(express.json());
app.use(cors());

port =8000


var mongoDB = "mongodb://localhost/Student";
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected To MongoDB"));
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));


app.use("/student", student);

app.get("/",(req,res)=>{
    res.send("hello")
});

app.listen(port,()=>{console.log(`app listening at http://localhost:${port}`)})



