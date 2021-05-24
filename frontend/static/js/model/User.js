const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        min: 6,
        max: 15
    },
    password:{
        type: String,
        required: true,
        min: 6,
        max: 15
    },
    name:{
        type: String,
        required: true,
        min: 1,
        max: 255,
    },
    lastname:{
        type: String,
        required: true,
        min: 1,
        max: 255,
    },
    telephone:{
        type: String,
        required: true,
        min: 10,
        max: 10,
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", userSchema);