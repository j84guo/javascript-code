var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream("data")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("out.gz"))

console.log("...file compressed");
