const express=require('express');
const app=express();
const port=3000;

app.get("/",(req,res)=>{
    res.send("This is root route");
});

//Example 1
// app.get("/:username/:id",(req,res)=>{
//     console.log(req.params);
//     res.send("Hello,I am root");
// });

//Example 2
app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    let htmlStr=`<h1>Welcome to page of @${username}</h1>`;
    res.send(htmlStr);
});

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});