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
    walking_1:{
        type: Number,
        required: true,
        min: 0,
        max: 1, 
    },
    walking_2:{
        type: Number,
        required: true,
        min: 0,
        max: 1, 
    },
    walking_3:{
        type: Number,
        required: true,
        min: 0,
        max: 1, 
    },
    walking_no:{
        type: Number,
        required: true,
        min: 0,
        max: 1, 
    },
    weight_1:{
        type: Number,
        required: true,
        min: 0,
        max: 1, 
    },
    weight_2:{
        type: Number,
        required: true,
        min: 0,
        max: 1, 
    },
    weight_3:{
        type: Number,
        required: true,
        min: 0,
        max: 1, 
    },
    weight_4:{
        type: Number,
        required: true,
        min: 0,
        max: 1, 
    },
    age_1:{
        type: Number,
        required: true,
        min: 0,
        max: 1, 
    },
    age_2:{
        type: Number,
        required: true,
        min: 0,
        max: 1, 
    },
    age_3:{
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
    amount_1:{
        type: Number,
        required: true,
        min: 0,
        max: 1, 
    },
    amount_2:{
        type: Number,
        required: true,
        min: 0,
        max: 1, 
    },
    amount_3:{ 
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