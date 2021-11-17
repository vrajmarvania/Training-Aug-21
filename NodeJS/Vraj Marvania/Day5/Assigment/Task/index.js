// University of Mumbai needs to set an online exam for their students. For that they need to set a timer for three hours. After 3 hours exams should be finished.
// Note: Use promises and callbacks
// Once Exam is started start event should be invoke and When we end the exam end event should be call.
var http = require('http');
var fs = require('fs');
var http = require("http");

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const eventEmitter = new MyEmitter();

http.createServer(function (req, res) {

  if (req.url == "/") {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      second_function()
      res.end();

    });
  }

  if (req.url == "/Test") {
    // console.log(req.url == "/Test")
    fs.readFile('test.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
}).listen(8000);

function c1() {
  http.createServer('')
  console.log('Exam-Start');

}
function c2() {
  console.log('Exam-End');
}



eventEmitter.on('Exam-Start', c1); // Register for eventOne
eventEmitter.on('Exam-End', c2); // Register for eventOne


var second_function = function () {
  return new Promise(resolve => {
    eventEmitter.emit('Exam-Start');
    setTimeout(() => { eventEmitter.emit('Exam-End'); }, 4000);
  });
};


