const express = require("express");

const app = express();

app.get("/", (req, res)=>{
   return res.json({msg : "Welcome to the ci/cd pipeline setup using the github actions tool"});
})

app.listen(3000, ()=>{
    console.log("server is running on port :3000");
})