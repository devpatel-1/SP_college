// (2020 Paper) :- Write a Node.js program to create an HTTP server, reverse the number assigned to the num parameter and print Hostname, Search Parameters and Reversed Number on the webpage.

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {

    var q = url.parse(req.url, true);

    var num = q.query.num || "";

    var rev = num.split("").reverse().join("");

    res.write("Hostname: " + q.hostname + "<br>");
    res.write("Search Parameters: " + num + "<br>");
    res.write("Reversed Number: " + rev);

    res.end();

}).listen(3000);

console.log("Server running at http://localhost:3000/");