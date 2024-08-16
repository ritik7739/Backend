const express=require("express");
const app=express();
const mongoose=require("mongoose");
const { type } = require("os");

main().then((res)=>{
    console.log("connected to mongoDB sucessfully!!");
}).catch((err)=>{
    console.log("ERROR",err);
});

//connect to DB
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

//Schema Validations

let bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
    }
});

//model------>Collection
const Book=mongoose.model("Book",bookSchema);

//insert data

let book1=new Book({
    title:"Plane of Trigonometry",
    author:"S.L Loney",
    price:500,
});

book1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});
