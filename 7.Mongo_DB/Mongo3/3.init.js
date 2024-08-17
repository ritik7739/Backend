const mongoose=require("mongoose");
const Chat=require("./models/chat.js")
main().then(()=>{
    console.log("Connected to DB sucessfully!");
}).catch((err)=>{
    console.log("ERROR",err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChat=[
    {
        from:"neha",
        to:"preeti",
        msg:"send me notes for the exam",
        created_at:new Date(),
    },
    {
        from:"rohit",
        to:"mohit",
        msg:"tech me JS callback",
        created_at:new Date(),
    },
    {
        from:"amit",
        to:"sumit",
        msg:"all the best",
        created_at:new Date(),
    },
    {
        from:"anita",
        to:"ramesh",
        msg:"bring me some fruits",
        created_at:new Date(),
    },
    {
        from:"tony",
        to:"peter",
        msg:"I love to code",
        created_at:new Date(),
    }
];

Chat.insertMany(allChat);