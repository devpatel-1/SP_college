// Question:
// Write a Node.js program which creates database using MySQL named userDB and table named login which stores information about username and password. Insert five records and display it on console.

// Import mysql2
const mysql = require("mysql2");

// Create connection
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234"
});

// Connect MySQL
con.connect();

// Create database
con.query("CREATE DATABASE IF NOT EXISTS userDB");

// Select database
con.query("USE userDB");

// Create table
con.query(`
    CREATE TABLE IF NOT EXISTS login (
        username VARCHAR(50),
        password VARCHAR(50)
    )
`);

// Insert 5 records
con.query(`
    INSERT INTO login VALUES
    ('dev', '1234'),
    ('rahul', '5678'),
    ('jay', '1111'),
    ('meet', '2222'),
    ('raj', '3333')
`);

// Display records
con.query("SELECT * FROM login", (err, result) => {
    if (err) throw err;

    console.log(result);
});