
//video 12 Example of Basic Server Code with error page if request url is not correct

// http://localhost:8000/ajhsgsajhgd/jhagsdka
// http://localhost:8000/ajhsgsajhgd
// http://localhost:8000/

// 
var fs = require('fs');
var http = require('http');


function onRequest(request , response){

	console.log("In Request Method");
	console.log(request.url);
	if (request.method == 'GET' && request.url == '/'){
			response.writeHead(200,{"Context-Type": "text/plain"});
			fs.createReadStream("./krishna.html").pipe(response);
			}
			else{
				sent_404_onRequest(response)
			}
}

function sent_404_onRequest( response){

	console.log("In Error Method");
	response.writeHead(404,{"Context-Type": "text/plain"});
	response.write("Here is the response");
	response.end();
}

http.createServer(onRequest).listen(8000);
console.log("Server is running..........")