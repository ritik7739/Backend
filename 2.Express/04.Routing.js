const express=require('express');
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send("You contacted root routes");
});

app.get('/apple',(req,res)=>{
    res.send("You contacted apple routes");
});

app.get('/orange',(req,res)=>{
    res.send("You contacted orange routes");
});

//this is for all route except the above route
app.get('*',(req,res)=>{
    res.send("This path doesn't exist");
});

app.post('/',(req,res)=>{
    res.send('you sent a post request to root route');
});

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
})