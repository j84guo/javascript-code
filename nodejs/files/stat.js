var fs = require("fs")

console.log("getting file info...");
fs.stat("data", function(err, stats){
  if(err){
    return console.error(err);
  }
  console.log(stats);

  console.log(stats.isFile());
  console.log(stats.isDirectory());
});
