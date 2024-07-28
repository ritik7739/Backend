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
    let{username}=req.params;
    const instaData=require("./data.json");
    let data=instaData[username];
    console.log(data);
    if(data){
    res.render("instagram_page_with_EJS.ejs",{data});
    }else{
        res.render("error.ejs");
    }
});
app.listen(port,()=>{
    console.log(`app is listing on port ${port}`);
})