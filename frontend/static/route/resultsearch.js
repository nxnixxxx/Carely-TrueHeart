const router = require("express").Router();
const path = require("path");

router.post("/resultsearch", async(request, response) => {
    response.sendFile(path.resolve("./", "frontend", "index.html"));
});

module.exports = router;