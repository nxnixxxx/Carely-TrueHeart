const router = require("express").Router();
const path = require("path");
const { count } = require("../js/model/Hotel");
const Hotel = require("../js/model/Hotel");

router.post("/search", async(request, response) => {

    var reqBody = request.body;
    // [1] 2 dimensions array javascript
    // Query hotel
    var arridSim = new Array();


    var count = 0;
    var sim = 0;
    var sum = 0;
    var hotelBody,hotelId;

    var bodyParser = require('body-parser')

    console.log("Pet Type:" + request.body.pet_type)
    const query = Hotel.find({pet_type: request.body.pet_type}, (error, hotel) => {
        console.log("Hotel: " + hotel);
        hotel.forEach(function(h) {
            hotelBody = Object.values(h)[5];
            count = count + 1;
            console.log(hotelBody);
            // Start each hotel, Give sum = 0
            sum = 0;
            // console.log("Hotel id: " + hotelBody['_id']);
            Object.keys(hotelBody).forEach((key) => {
                if(key in reqBody){
                    console.log("reqBody value: " + reqBody[key] + " && hotelBody value: " + hotelBody[key]);
                    if(reqBody[key] == hotelBody[key]){
                        console.log(key + " is Match!! " + reqBody[key] + " " + hotelBody[key]);
                        sum = sum + 1;
                    }
                }else{
                    //console.log("This key is not in reqBody : " + key);
                }
            }) 
            //console.log("Sum Match: " + sum);
            sim = sum/10;
            //console.log("Sim: " + sim);
            hotelId = hotelBody['_id'] ;
            // End loop key/value in Hotel
            // [2] add value in 2 dimension array javascript
            //console.log(idSim["key"+count]);
            // idSim = idSim.sort((a, b) => a < b ? -1 : 1);
            arridSim.push({
                "hotelId" : hotelId,
                "sim" : sim
            });
        });
        //Before Sort
        console.log(arridSim);

        //After Sort
        arridSim.sort(function(a, b){
            if(a.sim > b.sim){
                return -1;
            }
            if(a.sim < b.sim){
                return 1;
            }
            return 0;
        });

        console.log(arridSim);
    });

    response.redirect("/resultsearch");
    //response.sendFile(path.resolve("./", "frontend", "index.html"));
});


module.exports = router;