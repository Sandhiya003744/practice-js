const express = require("express");
const server = express()
port=3000

const router = require("./route.js");
server.get('/', (req,res) => {
res.json("Hello World")
});

server.use("/" ,router);
server.listen(port, console.log(`Server running at http://localhost:${3000}`))