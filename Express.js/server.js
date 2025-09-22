const express = require("express");
const server = express()
port=3000
server.get('/', (req,res) => {
res.json("Hello world")
});
server.listen(port, console.log("Server running at http://localhost:3000"))