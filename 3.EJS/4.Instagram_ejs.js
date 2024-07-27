const express=require('express');
const app=express();
const port=3000;
const path=require('path');

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    res.render("instagram.ejs",{username});
});

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

