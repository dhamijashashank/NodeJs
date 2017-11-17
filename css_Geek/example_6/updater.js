var movie_access = require('./movie');

var obj_copy = movie_access;

obj_copy.id = 6;

obj_copy.str = "Str updated in Updater.js";
console.log(movie_access.id);
console.log(movie_access.str);
