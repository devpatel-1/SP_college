// Question:
// Write a Node.js program which takes User name, Email and Password from an HTML sign-up form and stores it into the Login table using MySQL.


// index.html

// <!DOCTYPE html>
// <html>
// <body>

// <h2>Sign Up</h2>

// <form action="/signup" method="POST">

//     User Name:
//     <input type="text" name="username"><br><br>

//     Email:
//     <input type="email" name="email"><br><br>

//     Password:
//     <input type="password" name="password"><br><br>

//     <button type="submit">Sign Up</button>

// </form>

// </body>
// </html>



// Import packages
const express = require("express");
const mysql = require("mysql2");

const app = express();

// Read form data
app.use(express.urlencoded({ extended: true }));

// MySQL connection
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "your_password",
    database: "userDB"
});

// Show HTML form
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Store form data in MySQL
app.post("/signup", (req, res) => {

    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;

    let sql = "INSERT INTO login VALUES (?, ?, ?)";

    con.query(sql, [username, email, password], (err) => {
        if (err) throw err;

        res.send("Sign Up Successful");
    });
});

// Start server
app.listen(3000, () => {
    console.log("Server started");
});


// MYSql Table

// CREATE DATABASE userDB;

// USE userDB;

// CREATE TABLE login (
//     username VARCHAR(50),
//     email VARCHAR(100),
//     password VARCHAR(50)
// );