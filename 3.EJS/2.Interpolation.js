const express=require('express');
const app=express();
const path=require('path');

const port=3000;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));


app.get("/",(req,res)=>{
    res.render("interpolation.ejs");
});

app.get("/hello",(req,res)=>{
    res.send("Hi ,I'm Hello");
});

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});