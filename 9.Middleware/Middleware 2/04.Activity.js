const express=require("express");
const app=express();
const PORT=8000;
const ExpressError=require("./02.ExpressError");

const checkToken=(req,res,next)=>{
    let {token}=req.query;
    if(token==="giveaccess"){
      next();
    }
   throw new ExpressError(401,"ACCESS DENIED");
};
app.get("/api",checkToken,(req,res)=>{
    res.send("This is api Route");
});

app.get("/random",(req,res)=>{
    res.send("This is a random Route");
});

app.get("/err",(req,res)=>{
   abcd=abcd;
});

//error handling
app.use((err,req,res,next)=>{
    //By default status code is 500 and message is something went wrong
    let {status=500,message="Something went wrong"}=err;
    res.status(status).send(message);
});

//Activity
app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access to admin is forbidden!");
});

app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`);
});