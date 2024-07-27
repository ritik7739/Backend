const express=require("express");
const app=express();
const port=3000;

//check the available method in express
// console.dir(app);

app.listen(port,()=>{
    console.log(`app is listening on ${port}`);
})