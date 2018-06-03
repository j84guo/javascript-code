var express = require("express");

// create express object
var app = express();

// register controllers
app.get("/", function(req, res){
  res.send("Hello world!");
});

// start server
var server = app.listen(8081, function(){
  // since server is available from within the callback
  // that means server (global) is initialized before the callback is invoked
  var host = server.address().address;
  var port = server.address().port;
});
