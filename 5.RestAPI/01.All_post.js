const express=require("express");
const path = require("path");
const app=express();
const port=3000;

app.use(express.urlencoded({extended:true}));
app.set(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

let posts=[
    {
        username:"ritik",
        content:"I love coding"
    },
    {  
        username:"deepak",
        content:"I love teaching"
    },
    {
        username:"saurabh",
        content:"I love to eat"
    }
];

app.get("/posts",(req,res)=>{
    res.render("home.ejs",{posts});
});

app.listen(port,(req,res)=>{
    console.log(`app is listening on port ${port}`);
});