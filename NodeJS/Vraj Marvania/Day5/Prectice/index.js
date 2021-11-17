var fs = require("fs");
var events = require("events");
const os = require("os");

// // 1. Event Module------------------------------------------------------------>

var rs = fs.createReadStream("./demofile.txt");
rs.on("open", function () {
  console.log("The file is open");
});

var events = require("events");
var eventEmitter = new events.EventEmitter();

// Create an event handler:
var myEventHandler = function () {
  console.log("I hear a scream!");
};

//Assign the event handler to an event:
eventEmitter.on("scream", myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit("scream");

// Example 1 — Create an Event Emitter Instance and Register a Couple of Callbacks

function c1() {
  console.log("an event occurred!");
}

function c2() {
  console.log("yet another event occurred!");
}

eventEmitter.on("eventOne", c1); // Register for eventOne
eventEmitter.on("eventOne", c2); // Register for eventOne

eventEmitter.emit("eventOne");
//  Example 2 — Registering for the Event to Be Fired Only One Time Using Once

eventEmitter.once("eventOnce", () => console.log("eventOnce once fired"));
eventEmitter.emit("eventOnce");
//  Example 3 — Registering for the Event With Callback Parameters

eventEmitter.on("status", (code, msg) => console.log(`Got ${code} and ${msg}`));

eventEmitter.emit("status", 200, "ok");

// Example 4 — Unregistering Events
eventEmitter.off("eventOnce");
eventEmitter.emit("eventOnce");

// Example 5 — Getting Listener Count

console.log(eventEmitter.listenerCount("eventOne"));

// Example 6 — Getting Raw Listeners

console.log(eventEmitter.rawListeners("eventOne"));

// // 2. Extending Event Module------------------------------------------------------------>

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// Only do this once so we don't loop forever
myEmitter.once("newListener", (event, listener) => {
  if (event === "event") {
    // Insert a new listener in front
    myEmitter.on("event", () => {
      console.log("B");
    });
  }
});
myEmitter.on("event", () => {
  console.log("A");
});
myEmitter.emit("event");
// Prints:
//   B
//   A

// // 3. OS Module------------------------------------------------------------>

console.log(os.arch());
console.log(os.cpus());
console.log(os.endianness());
console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.loadavg());
console.log(os.networkInterfaces());
console.log(os.platform());
console.log(os.release());
console.log(os.tmpdir());
console.log(os.totalmem());
console.log(os.type());
console.log(os.uptime());
console.log(os.userInfo());
