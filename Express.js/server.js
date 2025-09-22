const express = require("express");
const server = express()
const port=3000

server.use(express.json())
server.use((req, res, next) => {
    const Timestamp = new Date().toISOString();
  console.log(`time :${Timestamp} | method : ${req.method}`);
  next();
});

server.get('/', (req,res) => {
res.json("Hello World")
});

server.post('/list', (req, res) => {
  const list = req.body; 
  res.json({data: list});  
});

const router = require("./route.js");
server.use('/' ,router);

server.use((req, res) => 
  res.status(404).json({error: `Route ${req.method}  ${req.url} does not found`}))

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
