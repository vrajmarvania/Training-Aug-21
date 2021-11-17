const express = require('express');
const app = express();
const Emp= require('./routers/employee');
const Students= require('./routers/Students');
const login= require('./routers/login');

app.use(express.json());



// const homeRouter = require('./routes/index');
// const assignmentRouter = require('./routes/assignment');
// const feesRouter = require('./routes/fees');
// const resultRouter = require('./routes/result');
// const userRouter = require('./routes/users');

// app.set('view engine','ejs'/);

// app.use('/',homeRouter);
// app.use('/employees/:id/child',assignmentRouter)
// const stuRouter = [feesRouter,resultRouter];
// app.use('/students',stuRouter);
app.use('/Emp',Emp);
app.use('/Students',Students);

app.use('/login',login);

app.get('/', (req, res) => {
   res.send("hello")

});
app.listen(8000,()=>{
    console.log('listening at port 8000');
})