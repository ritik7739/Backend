const express=require('express');
const app=express();
const port=3000;
const path=require('path');


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/rolldice",(req,res)=>{
    let diceVal=Math.floor(Math.random()*5)+1;
    res.render("rollDice.ejs",{num :diceVal});
});

app.get("/hello",(req,res)=>{
    res.send("Hi,Hello route");
});

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});