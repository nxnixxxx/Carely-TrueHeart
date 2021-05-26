const router = require("express").Router();
const path = require("path");
const Hotel = require("../js/model/Hotel");

router.post("/search", async(request, response) => {
    // var city2 = request.body.city2;
    // var cityLat = request.body.cityLat;
    // var cityLng = request.body.cityLng;
    // var price = parseInt(request.body.price);
    // var cctv = parseInt(request.body.cctv);
    // var swimming = parseInt(request.body.swimming);
    // var food = parseInt(request.body.food);
    // var grooming = parseInt(request.body.grooming);
    // var walking = parseInt(request.body.walking);
    // var weight = parseInt(request.body.weight);
    // var age = parseInt(request.body.age);
    // var vaccine = parseInt(request.body.vaccine);
    // var amount = parseInt(request.body.amount);
    // var pet_type = request.body.pet_type;
    // var price = parseInt(request.body.price);

    console.log("hello search");
    var sum;
    var reqBody = request.body;
    // Query hotel
    const query = Hotel.find({pet_type: 'cat'}, (error, hotel) => {
        if(error) console.log(error)
        else{
            var hotelMap = {};
            //console.log(hotel.length);
            hotel.forEach(function(hotel) {
                var JSONHotel = JSON.stringify(hotel);
                console.log("JSON Hotel: " + JSONHotel);
                console.log("Request Body: " + reqBody);

                Object.keys(JSONHotel).forEach(function(hotelkey) {
                    // Object.keys(reqBody).forEach(function(key) {
                    //     console.log(hotelkey + "  " + key);
                    //     if(hotelkey == key){
                    //         console.log(reqBody[key] + " " + hotel[hotelKey]);
                    //     }
                    // })
                })
            });
        }
    });

    response.sendFile(path.resolve("./", "frontend", "index.html"));
});


module.exports = router;