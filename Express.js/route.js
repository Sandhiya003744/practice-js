const express = require("express");
const router = express.Router();

router.get('/user/:name', (req,res) => {
    const name = req.params.name;
res.json(`Hello [${name}]!`);

});

module.exports = router;