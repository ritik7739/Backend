const express=require("express");
const session = require("express-session");
const app=express();

const sessionOptions={
   secret:"mysupersecretstring",
   resave:false,
   saveUninitialized:true,
};

app.use(session(sessionOptions));

app.get("/register",(req,res)=>{
    let {name="anonymous"}=req.query;
    req.session.name=name;
    console.log(req.session.name);
    res.redirect("/hello");
});

app.get("/hello",(req,res)=>{
    res.send(`Hello,${req.session.name}`);
});

app.listen(3000,()=>{
    console.log("app is listening on port:3000");
});