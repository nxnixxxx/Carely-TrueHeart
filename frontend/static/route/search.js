const router = require("express").Router();
const path = require("path");
const Search = require("../js/model/Search");

router.post("/search", async(request, response) => {
    var city2 = request.body.city2;
    var cityLat = request.body.cityLat;
    var cityLng = request.body.cityLng;
    var price = parseInt(request.body.price);
    var cctv = parseInt(request.body.cctv);
    var swimming = parseInt(request.body.swimming);
    var food = parseInt(request.body.food);
    var grooming = parseInt(request.body.grooming);
    var walking = parseInt(request.body.walking);
    var weight = parseInt(request.body.weight);
    var age = parseInt(request.body.age);
    var vaccine = parseInt(request.body.vaccine);
    var amount = parseInt(request.body.amount);
    var pet_type = request.body.pet_type;
    var price = parseInt(request.body.price);

    console.log("Route: " + weight + " " + age + " " + amount +" "+ pet_type + " " + vaccine);
    
    // Create Schema and Insert to DB
    const search = new Search({ 
        city2: city2,
        cityLat: cityLat,
        cityLng: cityLng,
        price: price,
        cctv: cctv,
        swimming: swimming,
        food: food,
        grooming: grooming,
        walking: walking,
        weight: weight,
        age: age,
        vaccine: vaccine,
        pet_type: pet_type,
        amount: amount,
    });

    //await search.save();
    response.sendFile(path.resolve("./", "frontend", "index.html"));
});


module.exports = router;