var fs = require("fs");

// data to write
var data = "Output data destined for a file...\n";

// create
var writeStream = fs.createWriteStream("out");

// handle stream events (finish, error)
writeStream.on("finish", function() {
    console.log("write completed...");
});

writeStream.on("error", function(err){
   console.log(err.stack);
});

// write
writeStream.write(data, "UTF-8");

// mark end of file
writeStream.end();

console.log("program ended...");
