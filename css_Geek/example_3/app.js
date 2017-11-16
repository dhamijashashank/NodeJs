
//video 5 Example of this operator

var annonomus_name = {
	printName : function(){
		console.log(this == annonomus_name);
	}
}

annonomus_name.printName();


function worth_less(){
	console.log(this == global)
}


worth_less();

//output is true for line number 6 as the object which is present in annonomus
// function is of type annonomus_name class so it return true

//output for line number 14 is also true as it call with global object 