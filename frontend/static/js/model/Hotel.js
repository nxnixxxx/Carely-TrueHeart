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
        type: Integer,
        required: true,
        min: 1,
        max: 10000,
    },
    description:{
        type: String,
        required: true,
        min: 0,
        max: 10000,
    },
    cctv:{
        type: Integer,
        required: true,
        min: 1,
        max: 1, 
    },
    swimming:{
        type: Integer,
        required: true,
        min: 1,
        max: 1, 
    },
    food:{
        type: Integer,
        required: true,
        min: 1,
        max: 1, 
    },
    grooming:{
        type: Integer,
        required: true,
        min: 1,
        max: 1, 
    },
    walking_1:{
        type: Integer,
        required: true,
        min: 1,
        max: 1, 
    },
    walking_2:{
        type: Integer,
        required: true,
        min: 1,
        max: 1, 
    },
    walking_3:{
        type: Integer,
        required: true,
        min: 1,
        max: 1, 
    },
    walking_no:{
        type: Integer,
        required: true,
        min: 1,
        max: 1, 
    },
    weight_1:{
        type: Integer,
        required: true,
        min: 1,
        max: 1, 
    },
    weight_2:{
        type: Integer,
        required: true,
        min: 1,
        max: 1, 
    },
    weight_3:{
        type: Integer,
        required: true,
        min: 1,
        max: 1, 
    },
    weight_4:{
        type: Integer,
        required: true,
        min: 1,
        max: 1, 
    },
    age_1:{
        type: Integer,
        required: true,
        min: 1,
        max: 1, 
    },
    age_2:{
        type: Integer,
        required: true,
        min: 1,
        max: 1, 
    },
    age_3:{
        type: Integer,
        required: true,
        min: 1,
        max: 1, 
    },
    vaccine:{
        type: Integer,
        required: true,
        min: 1,
        max: 1, 
    },
    type:{
        type: Integer,
        required: true,
        min: 1,
        max: 1, 
    },
    amount_1:{
        type: Integer,
        required: true,
        min: 1,
        max: 1, 
    },
    amount_2:{
        type: Integer,
        required: true,
        min: 1,
        max: 1, 
    },
    amount_3:{ type: Integer,
        required: true,
        min: 1,
        max: 1, 

    },

});

module.exports = mongoose.model("Hotel", userSchema);