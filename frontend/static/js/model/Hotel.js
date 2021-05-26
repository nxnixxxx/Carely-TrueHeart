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
    walking_1:{
        type: Number,
        required: true,
        min: 0,
    },
    walking_2:{
        type: Number,
        required: true,
        min: 0,
    },
    walking_3:{
        type: Number,
        required: true,
        min: 0,
    },
    walking_no:{
        type: Number,
        required: true,
        min: 0,
    },
    weight_1:{
        type: Number,
        required: true,
        min: 0 
    },
    weight_2:{
        type: Number,
        required: true,
        min: 0 
    },
    weight_3:{
        type: Number,
        required: true,
        min: 0 
    },
    weight_4:{
        type: Number,
        required: true,
        min: 0 
    },
    age_1:{
        type: Number,
        required: true,
        min: 0 
    },
    age_2:{
        type: Number,
        required: true,
        min: 0 
    },
    age_3:{
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
    amount_1:{
        type: Number,
        required: true,
        min: 0
    },
    amount_2:{
        type: Number,
        required: true,
        min: 0
    },
    amount_3:{ type: Number,
        required: true,
        min: 0
    },

});

module.exports = mongoose.model("Hotel", userSchema);