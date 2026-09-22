// Question:
// Assume a student table having fields id, name, age, email, standard. Write a Node.js program to search a student by id or name, retrieve all information, then update the email of the same student and display the updated information.


// Import mysql
const mysql = require("mysql2");

// Create connection
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "your_password",
    database: "studentDB"
});

// Connect
con.connect();

// Search student by ID
let id = 1;

con.query(
    "SELECT * FROM student WHERE id = ?",
    [id],
    (err, result) => {

        if (err) throw err;

        console.log("Student Information:");
        console.log(result);

        // Update email
        con.query(
            "UPDATE student SET email = ? WHERE id = ?",
            ["newemail@gmail.com", id],
            (err) => {

                if (err) throw err;

                // Display updated information
                con.query(
                    "SELECT * FROM student WHERE id = ?",
                    [id],
                    (err, result) => {

                        if (err) throw err;

                        console.log("Updated Information:");
                        console.log(result);

                        con.end();
                    }
                );
            }
        );
    }
);