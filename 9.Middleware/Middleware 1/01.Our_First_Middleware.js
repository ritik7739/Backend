const express=require("express");
const app=express();
const PORT=3000;


//Middleware ---> also send a response
app.use((req,res)=>{
    let {query}=req.query;
    console.log(query);
    console.log("Hi I'm middleware");
    res.send("Middleware Finished");
});

app.get("/",(req,res)=>{
    res.send("I'M ROOT");
});

app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`);
});
