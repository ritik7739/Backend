const express=require("express");
const app=express();
const mongoose=require("mongoose");

//connection
main()
.then((res)=>{
    console.log("Successfully connected to MongoDB");
}).catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

//UserSchema
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

//Model ---> Collection
const User=mongoose.model("User",userSchema);

//delete Operation
//1.deleteOne()
// User.deleteOne({name:"Adam"}).then((res)=>{
//     console.log(res);
// });

// //2.deleteMany()
// User.deleteMany({age:45}).then((res)=>{
//     console.log(res);
// });

//3.findByIdAndDelete()
// User.findByIdAndDelete("66b5e43e343e0491d22c5b22").then((res)=>{
//     console.log(res);
// });

//4.findOneAndDelete()
User.findOneAndDelete({name:"Bruce"}).then((res)=>{
    console.log(res);
});
