const router = require("express").Router();
const session = require("express-session");
const path = require("path");
const Hotel = require("../js/model/Hotel");

router.post("/auth", async(request, response) => {
  
    var name = request.body.name;
    var city2 = request.body.city2;
    var cityLat = request.body.cityLat;
    var cityLng = request.body.cityLng;
    var telephone = request.body.telephone;
    var website = request.body.website;
    var price = request.body.price;
    var description = request.body.description;
    var cctv = request.body.cctv;
    var swimming = request.body.swimming;
    var food = request.body.food;
    var grooming = request.body.grooming;
    var walking_1 = request.body.walking_1;
    var walking_2 = request.body.walking_2;
    var walking_3 = request.body.walking_3;
    var walking_no = request.body.walking_no;
    var weight_1 = request.body.weight_1;
    var weight_2 = request.body.weight_2;
    var weight_3 = request.body.weight_3;
    var weight_4 = request.body.weight_4;
    var age_1 = request.body.age_1;
    var age_2 = request.body.age_2;
    var age_3 = request.body.age_3;
    var vaccine = request.body.vaccine;
    var type = request.body.type;
    var amount_1 = request.body.amount_1;
    var amount_2 = request.body.amount_2;
    var amount_3 = request.body.amount_3;
    

    console.log(name + " " + telephone + " " + website);
    
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
        walking_1: walking_1,
        walking_2: walking_2,
        walking_3: walking_3,
        walking_no: walking_no,
        weight_1: weight_1,
        weight_2: weight_2,
        weight_3: weight_3,
        weight_4: weight_4,
        age_1: age_1,
        age_2: age_2,
        age_3: age_3,
        vaccine: vaccine,
        type: type,
        amount_1: amount_1,
        amount_2: amount_2,
        amount_3: amount_3
    });

    
    await addhotel.save();
});


module.exports = router;