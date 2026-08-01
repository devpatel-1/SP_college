// (2020 Paper) :- Write a Node.js program to take any positive integer number from command line arguments and print all the factors of that number.

var num = process.argv[2]

console.log("Factors of " + num + " are : ")

for (var i = 1; i <= num; i++) {
    if (num % i == 0) {
        console.log(i)
    }
}