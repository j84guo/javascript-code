var fs = require("fs")

console.log("making blocking file read...")
var data = fs.readFileSync("data");

console.log(data.toString())
console.log("...progam ended")
