var fs = require("fs");
var fileName = "sheep.txt";


console.log("creating sheep.txt...")

// writeFile takes a file name, while write takes a descriptor
fs.writeFile(fileName, "Baaaaahhhhhh", function(err){
  if(err) console.log("error writing to file...");
  console.log("...wrote to sheep.txt");
});

console.log("deleting sheep.txt...");

fs.unlink(fileName, function(err) {
   if(err) return console.error(err);
   console.log("...file deleted");
});
