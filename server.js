const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Import Route
const authRoute = require("./frontend/static/route/auth");

// Init dotenv
dotenv.config();

// Express
const app = express();
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.get("/*", (request, ressponse) => {
    ressponse.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

// Route
app.post("/auth", authRoute);

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