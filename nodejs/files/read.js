var fs = require("fs");
var buf = new Buffer(1024);

console.log("opening existing file...");
fs.open("data", "r+", function(err, fd){
  if(err) return console.log(err);

  console.log("opended file...\nreading...");
  fs.read(fd, buf, 0, buf.length, 0, function(err, numBytes){
    if(err) return console.log(err);
    console.log(numBytes + " bytes read...");

    if(numBytes > 0){
      console.log(buf.slice(0, numBytes));
      console.log(buf.slice(0, numBytes).toString());
    }
  });
});
