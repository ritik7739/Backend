const express=require("express");
const app=express();
const PORT=3000;
const mongoose=require("mongoose");
const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

main().then(()=>{
    console.log("Connected to MongoDB sucessfully");
}).catch((err)=>{
    console.log("ERROR",err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.get("/",(req,res)=>{
    res.send("Root is Working");
});


app.listen(PORT,()=>{
    console.log(`Server is listening on PORT:${PORT}`);
});