const express=require('express');
const app=express();
const port=3000;

//set  view engine ----> ejs
app.set("view engine","ejs");

//set access for views engine from any folder
app.set("views",path.join(__dirname,"/views"));

app.get('/',(req,res)=>{
    res.render("home.ejs");
});

app.get("/hello",(req,res)=>{
    res.send("hello");
});

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});