
//video 4 Example of references 

var Name = {
	favColor : "Red" , 
	favName : "Don"
};

var obj = Name;
obj.favColor = "Green";
console.log(Name.favColor);

// we are updating value in obj which is copy of name object actually 
// its not copy its contain reference of that object.

// Example of ==

console.log(20=='20')

// Above statment return true as it check content only


// Example of ===
console.log(20==='20')

//Above statment return false as it will check content as well as its type
// one is int and other is string i.e it return false;
