// Question:
// Build a simple Express.js program to add, update, delete and display students using GET, PUT, POST and DELETE methods. Store student details in an object.


// Import express
const express = require("express");

// Create app
const app = express();

app.use(express.json());

// Student object
let student = {
    id: 1,
    name: "Dev",
    branch: "CE",
    semester: 5
};

// GET - Display student
app.get("/student", (req, res) => {
    res.send(student);
});

// POST - Add student
app.post("/student", (req, res) => {
    student = req.body;
    res.send("Student Added");
});

// PUT - Update student
app.put("/student", (req, res) => {
    student = req.body;
    res.send("Student Updated");
});

// DELETE - Delete student
app.delete("/student", (req, res) => {
    student = {};
    res.send("Student Deleted");
});

// Start server
app.listen(3000, () => {
    console.log("Server started");
});