const mongoose=require("mongoose");


main()
.then(()=>{
    console.log("Connected to MongoDB sucessfully");
}).catch((err)=>{
    console.log(err);
});
async function main(){
   await mongoose.connect("mongodb://127.0.0.1:27017/test");
}


//schema
const userSchemas=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

//models
const User=mongoose.model("User",userSchemas);

//Insert into User collection

const user2=new User({
    name:"Eve",
    email:"eve@yahoo.in",
    age:48,
});

user2.save()                         //return promises;
.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})