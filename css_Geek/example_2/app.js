
//video 3 how to handle multiple request 

function request(order){
	console.log("Request Number is "+ order);
	response(function(){
		Number ++;
		console.log("In response method" + Number);
	})

}
 var Number = 0 ;

function response(callback){
	setTimeout(callback , 5000);
}


request(1);
request(2);
request(3);
request(4);
request(5);
