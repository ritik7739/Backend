const express=require("express");
const app=express();
const PORT=3000;

app.use((req,res,next)=>{
    req.Time=new Date(Date.now()).toString();
    console.log(req.hostname,req.method,req.path,req.Time);
    next();
});
app.get("/",(req,res)=>{
    res.send("I'm Root");
});

app.get("/random",(req,res)=>{
    res.send("I'm Random Root");
});

app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`)
});
