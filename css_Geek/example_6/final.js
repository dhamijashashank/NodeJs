var movie_imp = require('./movie');

console.log("Printling all value of movie without any changes");

console.log(movie_imp.name());

// Actually this will call name method of movie class and that will 
//print some value in console but didn't return any thing so it print "undefined" 

console.log(movie_imp.Name1());

// above statment also print undefined.

console.log("Value of id is "+movie_imp.id);

console.log("value of str is "+movie_imp.str);