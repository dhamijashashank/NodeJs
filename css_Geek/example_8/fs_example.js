
//video 11 Example of Core Module


var fs = require('fs');

fs.writeFileSync("fileName.txt", "File Data is here ");

console.log(fs.readFileSync("fileName.txt").toString());


// fs stands for file synchronize i.e. to to save data in file and read data from file 