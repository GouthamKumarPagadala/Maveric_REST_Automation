/******Creating Basic Server

var http = require('http');
var fs = require('fs');


http.createServer(onRequest).listen(8888);
console.log(" Server is running...!!");

function onRequest(request,response){
  console.log("A user made a request" + request.url);
  if(request.method == 'GET' && request.url == '/'){
    response.writeHead(200,{"Content-Type":"text/html"});
    fs.createReadStream('./index.html').pipe(response);
}else{
  response.writeHead(404,{"Content-Type":"text/plain"});
  response.write("Error 404: Page Not Found");
  response.end();
}
}*/

//*******Creating Server using Express Framework
var express = require('express');
var app = express();
app.use(express.static('Workspace'));

app.get('/', function (req, res) {
  //res.send(__dirname);
   res.sendFile( __dirname + "/" + "index.html" );
})

var server = app.listen(8888, function () {
   var host = server.address().address
   var port = server.address().port
   console.log(host);
   console.log("Example app listening at http://%s:%s", host, port)
})
