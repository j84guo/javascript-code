var events = require("events");
eventEmitter = new events.EventEmitter();

// listener #1
var listener1 = function listener1(){
  console.log("listener1 called...");
}

// listener #2
var listener2 = function listener2(){
  console.log("listener2 called...");
}

// register listeners
eventEmitter.addListener("connection", listener1);
eventEmitter.on("connection", listener2);

var listeners = events.EventEmitter.listenerCount(eventEmitter, "connection");
console.log(listeners + " listeners listening to connection event");

// fire event
console.log("emitting event...")
eventEmitter.emit("connection");

// remove listener1 binding
eventEmitter.removeListener("connection", listener1);
console.log("removed listener1...");

var listeners = events.EventEmitter.listenerCount(eventEmitter, "connection");
console.log(listeners + " listeners listening to connection event");
