// Question:
// Consider a food store table having name, description and price in MySQL. Write a Node.js program to select food by entering name and quantity. Retrieve the bill by applying 10% discount on total amount and display it on browser.

// Import mysql
const mysql = require("mysql2");

// Create connection
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "your_password",
    database: "foodDB"
});

// Food name and quantity
let name = "Vegetable Sandwich";
let quantity = 2;

// Find food
con.query(
    "SELECT * FROM food WHERE name = ?",
    [name],
    (err, result) => {

        if (err) throw err;

        // Get price
        let price = result[0].price;

        // Calculate total
        let total = price * quantity;

        // 10% discount
        let discount = total * 10 / 100;

        // Final amount
        let payable = total - discount;

        // Display on browser
        console.log("Food: " + name);
        console.log("Quantity: " + quantity);
        console.log("Total: " + total);
        console.log("Discount: " + discount);
        console.log("Payable Amount: " + payable);
    }
);