
//video 11 Example of Core Module (path)


var path = require('path');

var localPath = "Desktop\\krishna\\\Folder1\\\a.html";

console.log(path.normalize(localPath));
console.log(path.dirname(localPath));
console.log(path.basename(localPath));
console.log(path.extname(localPath));

// path stands for path related work

//OutPut in mac is following 

//Desktop\krishna\Folder1\a.html	- Normalized path same as windows
//.									- dir name is . different in windows
//Desktop\krishna\Folder1\a.html	- base Name is full path different in windows
//.html								- extension is .html same as in windows



// output in windows  

//Desktop\krishna\Folder1\a.html	- Normalized path 
//Desktop\krishna\Folder1			- dir name is . different in mac
//a.html							- base Name is fileName and different in mac
//.html								- extension is .html same as in mac