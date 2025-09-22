const express = require("express");
const server = express()
port=3000

const router = require("./route.js");

server.use((req, res, next) => {
    const Timestamp = new Date().toISOString();
  console.log(`time :${Timestamp} | method : ${req.method}`);
  next();
});

server.get('/', (req,res) => {
res.json("Hello World")
});

server.use('/' ,router);
server.listen(port, console.log(`Server running at http://localhost:${3000}`))