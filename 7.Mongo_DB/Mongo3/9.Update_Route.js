const express=require("express");
const app=express();
const mongoose=require("mongoose");
const PORT=3000;
const path=require("path");
const Chat=require("./models/chat.js");
const methodOverride=require("method-override");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride("_method"));

//connection to mongoose
main().then(()=>{
    console.log("Sucessfully connected to DB");
}).catch((err)=>{
    console.log("ERROR",err);
});
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//home route
app.get("/",(req,res)=>{
    res.send("Root Route is working");
});

//chat route
app.get("/chats",async(req,res)=>{
    chats=await Chat.find();
    res.render("show_chat.ejs",{chats});
});

//new chat route
app.get("chats/new",(req,res)=>{
    res.send("new.ejs");
});

//create Route
app.post("chats",(req,res)=>{
    let{from,msg,to}=req.body;
    let chats=new Chat({
        from:from,
        msg:msg,
        to:to,
        created_at:new Date(),
    });
    chats.save().then(()=>{
        console.log("chat save successfully");
    }).catch((err)=>{
        console.log(err);
    });
    res.redirect("/chats");
});

//Edit Route
app.get("/chats/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let chats=await Chat.findById(id);
    res.render("edit.ejs",{chats});
});

//update route
app.put("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let {msg:newMsg}=req.body;
    let updatedchat= await Chat.findByIdAndUpdate(
        id,
        {msg:newMsg},
        {runValidators:true,new:true},
    );
    res.redirect("/chats");

});

app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`);
});
