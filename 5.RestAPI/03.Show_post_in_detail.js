const express=require("express");
const path = require("path");
const app=express();
const port=3000;
const { v4:uuidv4 }=require('uuid');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

let posts=[
    {   
        id:uuidv4(),
        username:"ritik",
        content:"I love coding"
    },
    {
        id:uuidv4(),
        username:"deepak",
        content:"I love teaching"
    },
    {
        id:uuidv4(),
        username:"saurabh",
        content:"I love eating"
    }
];

app.get("/posts",(req,res)=>{
    res.render("home.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new_post.ejs");
});

app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("show.ejs",{ post });
});

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});
