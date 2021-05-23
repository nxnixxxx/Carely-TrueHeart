const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Init dotenv
dotenv.config();

// Init express
const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

// Run frontend
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

// Open port
app.listen(3000, () => console.log("Server running ... http://localhost:3000/"));

// Connect DB
mongoose.connect(
    process.env.DB_CONNECT, 
    { 
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    () => {
    console.log("Mongoose Connected!!");
});

// Middleware
app.use(express.json());
