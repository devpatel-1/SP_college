// Question:
// Write a Node.js program to perform the following database operations on a Library table using MySQL:

// Add a new book
// Retrieve books by author
// Update number of copies
// Delete book using BookID


// Import mysql
const mysql = require("mysql2");

// Connect to MySQL
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "your_password",
    database: "libraryDB"
});

con.connect();

// 1. Add new book
con.query(
    "INSERT INTO Library VALUES (?, ?, ?, ?)",
    [1, "JavaScript", "John", 5]
);

// 2. Get books by author
con.query(
    "SELECT * FROM Library WHERE Author = ?",
    ["John"],
    (err, result) => {
        if (err) throw err;
        console.log("Books by John:");
        console.log(result);
    }
);

// 3. Update copies
con.query(
    "UPDATE Library SET Copies = ? WHERE BookID = ?",
    [10, 1]
);

// 4. Delete book
con.query(
    "DELETE FROM Library WHERE BookID = ?",
    [1]
);

console.log("Operations completed");


// Table 

// CREATE TABLE Library (
//     BookID INT,
//     Title VARCHAR(50),
//     Author VARCHAR(50),
//     Copies INT
// );
