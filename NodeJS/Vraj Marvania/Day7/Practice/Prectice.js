const express = require('express');

// custom middleware create -------------------->
const LoggerMiddleware = (req, res, next) => {
    console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`)
    next();
}
const app = express()

// application level middleware  ----------------->
app.use(LoggerMiddleware);
// users route
app.get('/users', (req, res) => {
    res.json({
        'status': true
    })
})

// save route
app.post('/save', (req, res) => {
    res.json({
        'status': true
    })
})
app.listen(8000, (req, res) => {
    console.log('server running on port 3002')
})

//Router-level middleware ------------------------->
var express = require('express')
var app = express()
var router = express.Router()

router.use(function (req, res, next) {
    if (!req.headers['x-auth']) return next('router')
    next()
})

router.get('/user/:id', function (req, res) {
    res.send('hello, user!')
})

app.use('/admin', router, function (req, res) {
    res.sendStatus(401)
})



// const express = require('express');
const app = express();
const router = express.Router()

router.use((req, res, next) => {
    console.log("Time:", new Date())
    next()
})


router.get("/user", (req, res, next) => {
    console.log('Request URL:', req.originalUrl)
    next()
})
app.get("/about", (req, res) => {
    console.log('Request URL:', req.originalUrl)
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
app.use('/', router)


app.listen(8000, (req, res) => {
    console.log('server running on port 8000')
})


// Built-in middleware  ------------------>
var express = require('express')
var app = express()
var cookieParser = require('cookie-parser')

// load the cookie-parsing middleware
app.use(cookieParser())