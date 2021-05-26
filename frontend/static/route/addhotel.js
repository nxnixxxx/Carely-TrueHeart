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

    var walking_1 = parseInt(request.body.walking_1);
    if(isNaN(walking_1)) walking_1 = "0";

    var walking_2 = parseInt(request.body.walking_2);
    if(isNaN(walking_2)) walking_2 = "0";

    var walking_3 = parseInt(request.body.walking_3);
    if(isNaN(walking_3)) walking_3 = "0";

    var walking_no = parseInt(request.body.walking_no);
    if(isNaN(walking_no)) walking_no = "0";

    var weight_1 = parseInt(request.body.weight_1);
    if(isNaN(weight_1)) weight_1 = "0";

    var weight_2 = parseInt(request.body.weight_2);
    if(isNaN(weight_2)) weight_2 = "0";

    var weight_3 = parseInt(request.body.weight_3);
    if(isNaN(weight_3)) weight_3 = "0";

    var weight_4 = parseInt(request.body.weight_4);
    if(isNaN(weight_4)) weight_4 = "0";

    var age_1 = parseInt(request.body.age_1);
    if(isNaN(age_1)) age_1 = "0";

    var age_2 = parseInt(request.body.age_2);
    if(isNaN(age_2)) age_2 = "0";

    var age_3 = parseInt(request.body.age_3);
    if(isNaN(age_3)) age_3 = "0";

    var vaccine = parseInt(request.body.vaccine);
    if(isNaN(vaccine) || vaccine == "no") vaccine = "0";

    var amount_1 = parseInt(request.body.amount_1);
    if(isNaN(amount_1)) amount_1 = "0";

    var amount_2 = parseInt(request.body.amount_2);
    if(isNaN(amount_2)) amount_2 = "0";

    var amount_3 = parseInt(request.body.amount_3);
    if(isNaN(amount_3)) amount_3 = "0";

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
        pet_type: pet_type,
        amount_1: amount_1,
        amount_2: amount_2,
        amount_3: amount_3
    });

    await addhotel.save();
    response.sendFile(path.resolve("./", "frontend", "index.html"));
});


module.exports = router;