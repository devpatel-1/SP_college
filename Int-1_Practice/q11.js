// (2023) - Differentiate synchronous and asynchronous file reading functions. Write a Node.js program to write 10 random numbers in sample.txt, then find the frequency and position of duplicate numbers.

var fs = require("fs");

var data = "10 20 30 20 40 10 50 30 20 60";

fs.writeFile("sample1.txt", data, function(err){

    if(err)
        throw err;

    fs.readFile("sample1.txt", "utf8", function(err,data){

        if(err)
            throw err;

        var arr = data.split(" ");

        for(var i=0;i<arr.length;i++)
        {
            var count = 0;

            for(var j=0;j<arr.length;j++)
            {
                if(arr[i] == arr[j])
                {
                    count++;
                }
            }

            if(count > 1)
            {
                console.log(arr[i] + " Frequency = " + count + " Position = " + (i+1));
            }
        }

    });

});