const router = require("express").Router();
const path = require("path");
const User = require("../js/model/User");

router.post("/signin", async(request, response) => {
    //response.send(request.body.username + " " + request.body.password);

    const query = User.findOne({username: request.body.username}, (error, user) => {
        if(error) console.log(error)
        else{
            if(user.username == "admin" && request.body.password == user.password){
                response.redirect("/?admin");
            }
            else if(request.body.password == user.password){
                response.redirect("/?signinsuccess");
            }else{
                response.redirect("/auth?invalid");
            }
        }
    });
});


module.exports = router;