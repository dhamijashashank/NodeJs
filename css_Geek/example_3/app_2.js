
//video 6 Example Protype
// This give ablility to add some more method/ var in existing 
//class/method

function  Person(id)  {
	this.id = id;
}

Person.prototype = {
	var greet : function (){
		console.log(" In Greet Method");
	},
	name : "krishna"
}

var obj = new Person(5);

obj.greet();
console.log(obj.name);
console.log(obj.id);