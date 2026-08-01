// (2022) - Define exports keyword. Write a Node.js program which has a power() function with 2 parameters and fullname() function with firstName and lastName parameters in file1.js. Calculate the power of the given number and print the full name in calculate.js. (Use Math.pow() to calculate power of numbers.)

exports.power = function(a, b)
{
    return Math.pow(a, b);
}

exports.fullname = function(fname, lname)
{
    return fname + " " + lname;
}