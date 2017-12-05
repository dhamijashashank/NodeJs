
//video 12 Example of Basic Server Code 

// below code will execute even if we are pass any url using port 8000 like 
// http://localhost:8000/ajhsgsajhgd/jhagsdka
// http://localhost:8000/ajhsgsajhgd
// http://localhost:8000/
// In all above defined url below code run and show same output

var http = require('http');


function onRequest(request , response){

	console.log("In Request Method");
	response.writeHead(200,{"Context-Type": "text/plain"});
	response.write("Here is the response");
	response.end();
}

http.createServer(onRequest).listen(8000);
console.log("Server is running..........")