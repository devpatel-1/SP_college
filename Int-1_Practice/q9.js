// (2022) - Differentiate readFile() and readFileSync() functions. Write HTML content for the given table and read/display it in the browser.

var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){

    fs.readFile("table.html", function(err,data){

        if(err)
            throw err;

        res.write(data);

        res.end();

    });

}).listen(3000);

console.log("Server Running...");