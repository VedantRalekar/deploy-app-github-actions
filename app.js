const express = require("express");

const app = express();

app.get("/", (req, res)=>{
   return res.json({msg : "Hello from sever version v2"});
})

app.listen(3000, ()=>{
    console.log("server is running on port :3000");
})