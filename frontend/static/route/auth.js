const router = require("express").Router();
const session = require("express-session");
const path = require("path");
const User = require("../js/model/User");

router.post("/auth", async(request, response) => {
    var username = request.body.username;
    var password = request.body.password;
    var name = request.body.name;
    var lastname = request.body.lastname;
    var telephone = request.body.telephone;

    console.log(username + " " + password + " " + name + " " + lastname + " " + telephone);
    
    // Create Schema and Insert to DB
    const user = new User({
        username: username,
        password: password,
        name: name,
        lastname: lastname,
        telephone: telephone
    });

    try{
        await user.save();
        console.log(response.send("user" + request.params.id));
        response.sendFile(path.resolve("./", "frontend", "index.html"));
    }catch(err){
        response.status(400).send(err);
    }
});

module.exports = router;