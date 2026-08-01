var http = require('http');

var books = require('./q7_book');

http.createServer(function (req, res) {

    for ( var i = 0; i < books.length; i++) {
        if (books[i].title == "7 habits of highly effective people") {
            res.write("Book ID : " + books[i].id + "<br>");
            res.write("Book Title : " + books[i].title + "<br>");
            res.write("Author Name : " + books[i].authorName);
        }
    }

    res.end();

}).listen(3000)

console.log("Server Running at http://localhost:3000/");