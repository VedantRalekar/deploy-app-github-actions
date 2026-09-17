const express = require("express");

const app = express();

app.get("/", (req, res)=>{
   return res.json({msg : "Welcome to ci/cd pipeline"});
})

app.listen(3000, ()=>{
    console.log("server is running on port :3000");
})