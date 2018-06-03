var fs = require("fs");

console.log("opening file...")
fs.open("data", "r+", function(err, fd){
  if(err){
    return console.error(err);
  }
  console.log("...file opened with descriptor " + fd)
});
