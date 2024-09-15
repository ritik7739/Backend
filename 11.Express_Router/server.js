const express=require("express");
const app=express();
const PORT=3000;
const users=require("./routes/user");
const posts=require("./routes/post");

app.use("/users",users);
app.use("/posts",posts);


app.get("/",(req,res)=>{
    res.send("Hi,I'm Root Routes");
});

app.listen(PORT,()=>{
    console.log(`app is listening on the port ${PORT}`);
});