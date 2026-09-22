// Question:
// Create an Express.js server for book information management and create web pages for:

// Posting new book information
// Getting all book information
// Deleting book information
// Updating book information

// When each page is accessed, display a different message on that page.



// Import express
const express = require("express");

// Create express app
const app = express();

// Page for adding new book
app.post("/add", (req, res) => {
    res.send("Page for creating new book");
});

// Page for displaying all books
app.get("/books", (req, res) => {
    res.send("Page for getting all books");
});

// Page for deleting book
app.delete("/delete", (req, res) => {
    res.send("Page for deleting book");
});

// Page for updating book
app.put("/update", (req, res) => {
    res.send("Page for updating book");
});

// Start server
app.listen(3000, () => {
    console.log("Server started");
});
