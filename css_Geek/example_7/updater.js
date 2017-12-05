var movie_access = require('./movie');

var obj_copy = movie_access;
console.log(movie_access.id);
obj_copy.id = "krishna";

//obj_copy.str = "Str updated in Updater.js";
console.log(obj_copy.id);
// console.log(movie_access.str);
