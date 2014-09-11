// var http = require("http");
// http.createServer(function(request,response){
//   response.writeHead(200,{"Content-type":"text/plain"});
//   response.write("hello world");
//   response.end();
// }).listen(8888);


var http = require("http");
var fs = require("fs");
var url = require("url");

function onRequest(request, response) {
  console.log(request.url);
  // response.writeHead(200, {"Content-Type": "text/html"});
  // response.write('<img src="http://localhost:8888/images/ssj.jpg" />');
  // response.write('<img src="images/ssj.jpg" />');
  // response.end();

  response.writeHead(200, {
    "Content-Type": "image/jpg"
  });
  fs.createReadStream("images/ssj.jpg", "binary").pipe(response);
}

http.createServer(onRequest).listen(8888, '127.0.0.1');

console.log("Server has started.");