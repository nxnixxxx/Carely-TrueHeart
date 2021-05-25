const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    date:{
        
    }
});

module.exports = mongoose.model("Search", userSchema);