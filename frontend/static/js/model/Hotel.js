const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        min: 6,
        max: 50
    },
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
    telephone:{
        type: String,
        required: true,
        min: 10,
        max: 10,
    },
    website:{
        type: String,
        required: true,
        min: 5,
        max: 255,
    },
    price:{
        type: Number,
        required: true,
        min: 1,
        max: 10000,
    },
    description:{
        type: String,
        min: 0,
        max: 10000,
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
    },
    weight:{
        type: Number,
        required: true,
        min: 0 
    },
    age:{
        type: Number,
        required: true,
        min: 0 
    },
    vaccine:{
        type: Number,
        required: true,
        min: 0,
        max: 1, 
    },
    pet_type:{
        type: String,
        required: true,
        min: 3,
    },
    amount:{
        type: Number,
        required: true,
        min: 0
    },

});

module.exports = mongoose.model("Hotel", userSchema);