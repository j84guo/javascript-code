var fs = require("fs");
var dir = "/Users/jguo/Projects"

console.log("reading directory: " + dir);
fs.readdir(dir, function(err, files){
  if(err) return console.error(err);

  for(var i=0; i<files.length; i++){
    console.log(files[i]);
  }
});
