const express=require('express');
const app=express();
const port=3000;

//for parsing post response
app.use(express.urlencoded({extended:true}));
//for parsing json request 
app.use(express.json());

app.get("/register",(req,res)=>{
    let {user,passward}=req.query;
    res.send(`Standard GET response.Welcome to ${user}`);
});

app.post("/register",(req,res)=>{
    let {user,passward}=req.body;
    res.send(`Standard POST response.Welcome to ${user}`);
});

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});