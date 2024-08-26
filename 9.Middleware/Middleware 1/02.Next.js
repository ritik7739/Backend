const express=require('express');
const app=express();
const PORT=3000;


app.use((req,res,next)=>{
    console.log("I'm 1st Middleware");
    next();
});

app.use((req,res,next)=>{
    console.log("I'm 2nd Middleware");
    next();
});

app.get("/",(req,res)=>{
    res.send("I'm root");
});

app.get("/random",(req,res)=>{
    res.send("I'm Random root")
})

app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`);
});
