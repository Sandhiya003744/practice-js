const express = require("express");
const mongooseConnect = require("./Database.js");
const router = require("./route.js");

const server = express();

const port=3000

mongooseConnect();

server.use(express.json())
server.use((req, res, next) => {
    const Timestamp = new Date().toISOString();
  console.log(`time :${Timestamp} | method : ${req.method}`);
  next();
});

server.get('/', (req,res) => {
res.json("Hello World")
});



server.use('/list' ,router);

server.use((req, res) => 
  res.status(404).json({error: `Route ${req.method}  ${req.url} does not found`}))

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
