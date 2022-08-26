const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.send("hi im jay");
})

module.exports = router;