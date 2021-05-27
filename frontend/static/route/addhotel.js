const router = require("express").Router();
const path = require("path");
const Hotel = require("../js/model/Hotel");

router.post("/addhotel", async(request, response) => {
  
    var name = request.body.name;
    var city2 = request.body.city2;
    var cityLat = request.body.cityLat;
    var cityLng = request.body.cityLng;
    var telephone = request.body.telephone;
    var website = request.body.website;

    var price = parseInt(request.body.price);
    if(isNaN(price)) price = "0";

    var description = request.body.description;
    
    var cctv = parseInt(request.body.cctv);
    if(isNaN(cctv)) cctv = "0";

    var swimming = parseInt(request.body.swimming);
    if(isNaN(swimming)) swimming = "0";

    var food = parseInt(request.body.food);
    if(isNaN(food)) food = "0";

    var grooming = parseInt(request.body.grooming);
    if(isNaN(grooming)) grooming = "0";

    var walking = parseInt(request.body.walking);
    if(isNaN(walking)) walking = "0";

    var weight = parseInt(request.body.weight);
    if(isNaN(weight)) weight = "0";

    var age = parseInt(request.body.age);
    if(isNaN(age)) age = "0";

    var vaccine = parseInt(request.body.vaccine);
    if(isNaN(vaccine) || vaccine == "no") vaccine = "0";

    var amount = parseInt(request.body.amount);
    if(isNaN(amount)) amount = "0";

    var pet_type = request.body.pet_type;

    console.log("Add Hotel: " + name + " " + telephone + " " + website);
    console.log("Add Hotel: " + cctv + " " + swimming + " " + grooming);
    console.log("Add Hotel: " + pet_type + " " + vaccine);
    
    // Create Schema and Insert to DB
    const addhotel = new Hotel({ 
        name: name,
        city2: city2,
        cityLat: cityLat,
        cityLng: cityLng,
        telephone: telephone,
        website: website,
        price: price,
        description: description,
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

    await addhotel.save();
    response.sendFile(path.resolve("./", "frontend", "index.html"));
});


module.exports = router;