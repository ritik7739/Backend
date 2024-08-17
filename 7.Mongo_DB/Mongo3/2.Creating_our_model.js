const express=require("express");
const app=express();
const PORT=3000;
const mongoose=require("mongoose");
const path=require("path");
const Chat=require("./models/chat.js")

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

const chat1=new Chat({
    from:"Saurabh",
    to:"Deepak",
    msg:"Give me 500 rupees",
    created_at:new Date(),
});

chat1.save().then((res)=>{
    console.log(res);
});

app.get("/",(req,res)=>{
    res.send("Root is Working");
});


app.listen(PORT,()=>{
    console.log(`Server is listening on PORT:${PORT}`);
});