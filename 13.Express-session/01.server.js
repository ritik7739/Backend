const express=require("express");
const app=express();
const session=require("express-session");
const PORT=8000;

app.use(session({secret:"mysessionsecretstring"}));

app.get("/test",(req,res)=>{
    res.send("Test successfull!!")
});

app.listen(PORT,()=>{
    console.log(`app is listening on ${PORT}`);
});