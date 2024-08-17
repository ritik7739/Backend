const mongoose=require("mongoose");
const chatSchemas=new mongoose.Schema({
    from:{
        type:String,
        required:true,
    },
    to:{
        type:String,
        required:true,
    },
    msg:{
        type:String,
    },
    created_at:{
        type:Date,
        required:true,
    },
});

const Chat=mongoose.model("Chat",chatSchemas);


module.exports=Chat;