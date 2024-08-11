const mongoose=require("mongoose");

//connection to DB
main()
.then(()=>{
    console.log("connected to mongoDB sucessfully");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

//schemas
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

//model

const User=mongoose.model("User",userSchema);

//find
// User.find({}).then((data)=>{
//     console.log(data);
// });

//conditional find
// User.find({age:{$gt:30}}).then((data)=>{
//     console.log(data);
// });

//findOne 

// User.findOne({age:{$gt:30}}).then((data)=>{
//      console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });

//findById
User.findById("66b5a1c64aa71bf0d5895c31").then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});