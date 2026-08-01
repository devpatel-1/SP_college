// (2021) :- Write a Node.js program for fetching a word from command line arguments. Sort and display all the characters in alphabetical order without using any in-built sorting function.

var word = process.argv[2];

var arr = word.split("");

for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log("Sorted characters: " + arr.join(""));