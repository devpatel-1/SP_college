// Question:
// Build a simple Express.js program to add, update, delete and display all products in an e-commerce application using GET, POST, PUT and DELETE.

// Product properties:
// product_id, product_name, product_size, product_brand, product_color


// Import express
const express = require("express");

const app = express();

app.use(express.json());

// Product object
let product = {
    product_id: 1,
    product_name: "T-Shirt",
    product_size: "M",
    product_brand: "Nike",
    product_color: "Black"
};

// GET - Display product
app.get("/product", (req, res) => {
    res.send(product);
});

// POST - Add product
app.post("/product", (req, res) => {
    product = req.body;
    res.send("Product Added");
});

// PUT - Update product
app.put("/product", (req, res) => {
    product = req.body;
    res.send("Product Updated");
});

// DELETE - Delete product
app.delete("/product", (req, res) => {
    product = {};
    res.send("Product Deleted");
});

// Start server
app.listen(3000, () => {
    console.log("Server Started");
});
