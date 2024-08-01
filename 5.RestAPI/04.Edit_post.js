const express=require("express");
const app=express();
const port=3000;
const path=require('path');
const { v4:uuidv4 }=require("uuid");
const methodOverride = require("method-override");

app.set("view engine","/views");
app.set("views",path.join(__dirname,"/views"));

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
        id:uuidv4(),
        username:"ritik",
        content:"I love coding",
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

//new post added to posts route
app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
});

//show invidual posts in detail
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("show.ejs",{post});
});

app.patch("/posts/:id",(req,res)=>{
   let { id }=req.params;
   let newContent=req.body.content;
   let post=posts.find((p)=> id === p.id);
   post.content=newContent;
   res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id === p.id);
    res.render("edit_form.ejs",{ post });
});


app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});