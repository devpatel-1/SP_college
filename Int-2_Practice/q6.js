// Question:
// Create an array of objects named student_info having enroll_no, name, branch and sem. Perform insert, delete, update and display using GET, POST, PUT and DELETE requests in Express.


// Import express
const express = require("express");

const app = express();

app.use(express.json());

// Array of student objects
let student_info = [
    {
        enroll_no: 1,
        name: "Dev",
        branch: "CE",
        sem: 5
    }
];

// GET - Display all students
app.get("/students", (req, res) => {
    res.send(student_info);
});

// POST - Insert student
app.post("/students", (req, res) => {
    student_info.push(req.body);
    res.send("Student Added");
});

// PUT - Update student
app.put("/students", (req, res) => {
    student_info[0] = req.body;
    res.send("Student Updated");
});

// DELETE - Delete student
app.delete("/students", (req, res) => {
    student_info.pop();
    res.send("Student Deleted");
});

// Start server
app.listen(3000, () => {
    console.log("Server Started");
});
