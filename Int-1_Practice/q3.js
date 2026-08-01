// (2020) - Write a Node.js program to read content from a text file, calculate the number of words and write the total number of words in the same text file.

var fs = require('fs');

fs.readFile("sample.txt", "utf-8", function (err, data) {

    if (err)
        throw err;

    var words = data.split(" ").length

    fs.appendFile("sample.txt", "\nTotal no of words: " + words, function(err) {


        if (err)
            throw err;

        console.log("Total no of words appended to the file!");
        
    })

})