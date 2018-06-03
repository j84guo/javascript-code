// load http module
var http = require("http");

// create server and listen on port
http.createServer(function(request, response){
  // write http headers
  response.writeHead(200, {"Content-Type": "text/plain"});

  // write http body and send response
  response.end("Hello World\n");
}).listen(8081)

console.log("Server running at http://127.0.0.1:8081");
