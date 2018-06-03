/*
There are several global objects in Node.js which do not have to be imported.
We can use them directly.
*/

// path to currently executing file (like __name__ in python)
console.log(__filename);

// directory containing currently executing file
console.log(__dirname);

function myCallback(){
    console.log("callback...")
}

// setTimeout() invokes a callback after a specified time
// time is determined by the operating system and is only approximate
var timer = setTimeout(myCallback, 1000);

// clearTimeout() deletes a previously created timer
clearTimeout(timer);

// setInterval() executes a callback repeatedly
setInterval(myCallback, 1000);

// console
console.log("console is a global object which is used to send ouput to stdout and stderr...");

// process
console.log("process provides information about the current Node.js process")
console.log(process)
