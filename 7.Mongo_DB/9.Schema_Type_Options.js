const express=require("express");
const app=express();
const mongoose=require("mongoose");
const { type } = require("os");
const { title } = require("process");

//connect to db
main().then((res)=>{
    console.log("Connected to MongoDB sucessfully");
}).catch((err)=>{
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

//Schemas Validation
const bookSchemas=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
    },
    price:{
        type:String,
        min:1,
    },
    discount:{
        type:String,
        default:0,
    },
    categaory:{
        type:String,
        enum:["fiction","non fiction"],
    }
});

//Model----->collection
const Book=mongoose.model("Book",bookSchemas);

//INsert

let Book2=new Book({
    title:"Mathematics",
    author:"RD SHARMA",
    price:200,
    categaory:"fiction",
});

Book2.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});
