let express=require('express');
let app=express();
let port=3000;

app.listen(port,()=>{
    console.log(`app is listen on ${port}`);
});

app.use((req,res)=>{
    console.log("Request is received!!");
});