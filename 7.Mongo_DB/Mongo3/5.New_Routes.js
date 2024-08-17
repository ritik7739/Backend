const express=require("express");
const app=express();
const PORT=3000;
const mongoose=require("mongoose");
const path=require("path");
const Chat=require("./models/chat.js");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"public")));

main().then(()=>{
    console.log("Sucessfully connected to MongoDB");
}).catch((err)=>{
    console.log("ERROR",err);
});
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//Root Route
app.get("/",(req,res)=>{
    res.send("Root is working");
});

//show all Chats
app.get("/chats",async(req,res)=>{
    let chats=await Chat.find();
    res.render("show_chat.ejs",{chats});
});

//New Routes
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});

app.listen(PORT,()=>{
    console.log(`app is listening on PORT: ${PORT}`);
});
