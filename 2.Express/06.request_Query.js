const express=require('express');
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send("Hi, I am root route");
});

//Query String 
//Example 1
// app.get('/search',(req,res)=>{
//    console.log(req.query);
//    res.send("no results");
// });

//Example 2
app.get('/search',(req,res)=>{
   let {q}=req.query;
    if(!q){
        res.send("<h1>nothing searched </h1>");
    }
    res.send(`<h1>searched result for query: ${q}</h1>`);
})

app.listen(port,()=>{
    console.log(`app is listening on port: ${port}`);
});