const router = require("express").Router();
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

    const userexist = await User.findOne({ username: request.body.username });
    if(userexist) return response.redirect("/auth?autherror");

    try{
        await user.save();
        response.sendFile(path.resolve("./", "frontend", "index.html"));
    }catch(err){
        response.redirect("/auth?autherror");
    }
});

module.exports = router;