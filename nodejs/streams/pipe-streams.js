var fs = require("fs");

// create
var readerStream = fs.createReadStream("data");
var writerStream = fs.createWriteStream("out");

// read input.txt and write data to output.txt
readerStream.pipe(writerStream);
console.log("program ended...");
