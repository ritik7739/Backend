const express=require("express");
const app=express();
const port=3000;
const path=require('path');

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));


let posts=[
    {
     username:"ritik",
     content:"I love to code"
    },
    {
      username:"deepak",
      content:"I love to teach"
    },
    {
      username:"saurabh",
      content:"I love to eat"
    }
];

app.get("/posts",(req,res)=>{
    res.render("home.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new_post.ejs",);
});

app.post("/posts",(req,res)=>{
    let{username,content}=req.body;
    posts.push({username,content});
    res.redirect("/posts");
});

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});