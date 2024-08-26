const { checkPrime } = require("crypto");
const express=require("express");
const app=express();
const PORT=3000;

//middleware
const CheckToken=(req,res,next)=>{
    let {token}=req.query;
    if(token==="giveaccess"){
       next();
    }
    res.send("ACCESS DENIED");
}
//Middleware passes for api route
app.get("/api",CheckToken,(req,res)=>{
    res.send("Api path is called!");
});

app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`);
});