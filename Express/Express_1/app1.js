var Number = 0 ;

function request(order){
    console.log("Request Number is "+ order);
    response(function(){
        Number ++;
        console.log("In response method" + Number);


        request(Number);
    })

}


function response(callback){
    setTimeout(callback , 2000);
    // setTimeout(callback );
    // console.log("hare krishna" )
}


request(0);
// request(2);
// request(3);
// request(4);
// request(5);