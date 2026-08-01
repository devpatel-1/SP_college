// (2023) - Write a Node.js program to reverse the string using command line arguments.


var str = process.argv[2];

var rev = str.split("").reverse().join("");

console.log("Reverse String = " + rev);