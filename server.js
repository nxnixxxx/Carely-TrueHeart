const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Init dotenv
dotenv.config();
const app = express();
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));
app.use(express.json());
app.get("/*", (request, ressponse) => {
    ressponse.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.post("/auth", (request, ressponse) => {
    console.log("Authen Page")
    console.log("post : " + JSON.stringify(request.headers));
    ressponse.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
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