const express = require("express");
const router = express.Router();


const { postUser, getUser, userById } = require("./controller.js");
router.get("/user/:name", (req, res) => {
    const { name } = req.params;
    res.send(`Hello [${name}]!`);
});

router.post("/", postUser);

router.get("/", getUser);

router.get("/:id", userById);

module.exports = router;
