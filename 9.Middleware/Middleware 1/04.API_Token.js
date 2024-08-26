const express=require("express");
const app=express();
const PORT=3000;
app.use("/api",(req,res,next)=>{
   let {token}=req.query;
   if(token==="giveaccess"){
      next();
   }else{
    res.send("ACCESS DENIED!!");
   }
});

app.get("/api",(req,res)=>{
    res.send("Hi,I'm Root");
});

app.get("/random",(req,res)=>{
    res.send("Hi I'm Random Root");
});

app.listen(PORT,()=>{
    console.log(`app is listen on port ${PORT}`);
});