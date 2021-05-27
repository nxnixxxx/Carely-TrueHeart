const router = require("express").Router();
const path = require("path");
const User = require("../js/model/User");

router.post("/signin", async(request, response) => {
    //response.send(request.body.username + " " + request.body.password);


    const query = User.findOne({username: request.body.username}, (error, user) => {
        if(error) console.log(error)
        else{
            console.log(user.password);
            if(request.body.password == user.password){
                response.redirect("/home?signinsuccess");
            }else{
                response.redirect("/auth?invalid");
            }
        }
    });
});


module.exports = router;