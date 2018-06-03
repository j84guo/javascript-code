var fs = require("fs");

console.log("Going to delete directory /tmp/test...");
fs.mkdir("/tmp/test", function(err){
  if(err) return console.log(err);
  console.log("created directory...")
})

fs.rmdir("/tmp/test",function(err){
   if (err) {
      return console.error(err);
   }
   console.log("Deleted directory /tmp/test");
   console.log("Going to read directory /tmp");

   fs.readdir("/tmp/",function(err, files){
      if (err) {
         return console.error(err);
      }
      files.forEach( function (file){
         console.log( file );
      });
   });
});
