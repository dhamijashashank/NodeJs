var movie_imp = require('./movie');

var obj_copy = movie_imp;
obj_copy.id = "krishna in final class"
console.log("Printling all value of movie without any changes");

// As per tutorial if we update value of id in obj_copy variable then its not reflected in main object 
//like  movie_imp but this is not happened actually , may be there is some issue with understanding 



// below both statment is giving same output.
console.log("Value of id is "+movie_imp.id);
console.log("Value of id is "+obj_copy.id);

