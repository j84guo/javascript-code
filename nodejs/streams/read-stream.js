var fs = require("fs");

// global variables are generally considered bad...
var data = "";

// create a read stream using utf-8
var readStream = fs.createReadStream("data");
readStream.setEncoding("UTF-8");

// handle stream events (data, end, error)
readStream.on("data", function(chunk){
  data += chunk;
});

readStream.on("end", function(){
  console.log(data);
});

readStream.on("error", function(err){
   console.log(err.stack);
});

console.log("program ended...");
