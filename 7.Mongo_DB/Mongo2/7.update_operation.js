const express=require("express");
const app=express();
const mongoose=require("mongoose");

//connection to mongodb
main()
.then(()=>{
   console.log("successfully connected to mongoDB");
}).catch((err)=>{
    console.log(err);
})

async function main() {
   await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

//User Schemas

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

//model --->Collection
const User=mongoose.model("User",userSchema);

//------------------update command-------------------
// //1.updateOne
// User.updateOne({name:"Bruce"},{age:49}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// //2.updateMany
// User.updateMany({age:{$gt:45}},{age:45}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

//3.findOneAndUpdate
User.findOneAndUpdate({name:"Bruce"},{age:55},{new:true}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

//4.findByIdAndUpdate
User.findByIdAndUpdate("66b5e43e343e0491d22c5b22",{age:47},{new:true}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});