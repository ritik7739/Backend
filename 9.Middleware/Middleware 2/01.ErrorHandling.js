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
    console.log("-----------ERROR---------------");
    res.send(err);
});

app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`);
});