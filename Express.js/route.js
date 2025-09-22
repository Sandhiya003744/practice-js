const express = require("express");
const route = express()
port=3000
route.get('/user/:name', (req,res) => {
res.json("Hello, [name]!")
});
route.listen(port, console.log(`http://localhost:${port}/user/:name`))