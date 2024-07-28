const express=require('express');
const app=express();
const port=3000;
const path=require('path');

app.set("view engine","ejs");
app.set("view",path.join(__dirname,"/views"));

//handling get responses with the help of query string
app.get("/register",(req,res)=>{
   let {user,password}=req.query;
   res.send(`Standard GET response. Welcome to ${user}`);
});

app.post("/register",(req,res)=>{
    res.send("Standard POST response")
});

app.listen(port,()=>{
   console.log(`app is listening on port ${port}`);
});