const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    city2:{
        type: String,
        required: true,
        min: 6,
        max: 15
    },
    cityLat:{
        type: String,
        required: true,
        min: 6,
        max: 15
    },
    cityLng:{
        type: String,
        required: true,
        min: 6,
        max: 15
    },
    price_1:{
        type: Number,
        required: true,
        min: 0,
        max: 100000,
    },
    cctv:{
        type: Number,
        required: true,
        min: 0,
        max: 1, 
    },
    swimming:{
        type: Number,
        required: true,
        min: 0,
        max: 1, 
    },
    food:{
        type: Number,
        required: true,
        min: 0,
        max: 1, 
    },
    grooming:{
        type: Number,
        required: true,
        min: 0,
        max: 1, 
    },
    walking:{
        type: Number,
        required: true,
        min: 0,
        max: 1, 
    },
    weight:{
        type: Number,
        required: true,
        min: 0,
        max: 1, 
    },
    age:{
        type: Number,
        required: true,
        min: 0,
        max: 1, 
    },
    vaccine:{
        type: Number,
        required: true,
        min: 0,
        max: 1, 
    },
    amount:{
        type: Number,
        required: true,
        min: 0,
        max: 1, 
    },
    pet_type:{
        type: String,
        required: true,
        min: 3,
        max: 3,
    },
    air:{
        type: String,
        required: true,
        min: 0,
        max: 1,
    },
});

module.exports = mongoose.model("Search", userSchema);