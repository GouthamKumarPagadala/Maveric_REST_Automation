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
}
