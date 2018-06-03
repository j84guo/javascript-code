var fs = require("fs");

console.log("starting asyncronous file read...")

fs.readFile("data", function(err, data){
	if(err) return console.error(err);
	console.log(data.toString());
});

console.log("...program ended")
