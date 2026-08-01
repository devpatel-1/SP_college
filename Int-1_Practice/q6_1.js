// (2021) :- Explain appendFile() and unlink() methods with an example.

var fs = require("fs");

fs.appendFile("sample.txt", "\nWelcome to Node.js", function(err){

    if(err)
        throw err;

    console.log("Data Added Successfully");
});