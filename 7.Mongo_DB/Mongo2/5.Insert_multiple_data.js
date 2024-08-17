const mongoose=require("mongoose");

main()
.then(()=>{
   console.log("connected to mongoDB sucessfully");
})
.catch((err)=>{
   console.log(err);
});
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

//user schema
const userSchema=new mongoose.Schema({
     name:String,
     email:String,
     age:Number,
});

//Model
const User=mongoose.model("User",userSchema);

//Insert multiple
User.insertMany([
    {name:"Tony",email:"tony@gmail.com",age:50 },
    {name:"Bruce",email:"bruce@yahoo.in",age:47},
    {name:"Peter",email:"peter@yahoo.in",age:30},
]);