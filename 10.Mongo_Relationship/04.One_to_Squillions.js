const mongoose=require("mongoose");
const {Schema}=require("mongoose");

//connection to DB
main().then(()=>{
    console.log("Successfully connected to DB");
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

//Schemas 

const UserSchemas=new Schema({
    username:String,
    email:String,
});

const PostSchemas=new Schema({
    content:String,
    likes:Number,
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
});

//model
const User=mongoose.model("User",UserSchemas);
const Post=mongoose.model("Post",PostSchemas);

//add Data

const addData=async ()=>{
    let user1=new User({
        username:"rahul kumar",
        email:"rahul@gmail.com"
    });

    let post1=new Post({
        content:"Hello world",
        likes:7,
    });

    post1.user=user1;
    
   let res1=await user1.save();
   let res2=await post1.save();

   console.log(res1);
   console.log(res2);
}

addData();