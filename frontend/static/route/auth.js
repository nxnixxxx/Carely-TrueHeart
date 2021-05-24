const router = require("express").Router();
const path = require("path");

router.post("/auth", (request, response) => {
    var username = request.body.username;
    var password = request.body.password;
    var name = request.body.name;
    var lastname = request.body.lastname;
    var tel = request.body.tel;

    console.log(username + " " + password + " " + name + " " + lastname + " " + tel);

    // Insert to DB

    response.sendFile(path.resolve("./", "frontend", "index.html"));
});

module.exports = router;