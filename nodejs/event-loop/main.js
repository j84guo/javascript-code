// load events module 
var events = require("events")

// emits events 
var emitter = new events.EventEmitter();

var connectHandler = function connected(){
	console.log("connection successful...");
	emitter.emit("data_received");
}

// bind connection event with handler 
emitter.on("connection", connectHandler);

// bind data_received with anonymous function 
emitter.on("data_received", function(){
	console.log("data was received");
});

emitter.emit("connection");
console.log("...program ended")
