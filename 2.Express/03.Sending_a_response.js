const express=require('express');
const app=express();
const port=3000;

app.use((req,res)=>{
    console.log("request is recieved");
    // //sending normal string
    // res.send("this is a normal string");
    //sending an object as a response
    res.send({
        name:"apple",
        color:"red",
    });
    //sending html elment as a response
    // let code="<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul>";
    // res.send(code);
});


app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

