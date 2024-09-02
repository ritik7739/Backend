const mongoose=require('mongoose');

main().then(()=>{
    console.log("Successfully connected to DataBase!!");
}).catch((err)=>{
    console.log(err)
});


async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema=new mongoose.Schema({
    username:String,
    addresses:[
        {
            _id:false,
            location:String,
            city:String
        },
    ],
});

const User=mongoose.model("User",userSchema);


const addUsers= async()=>{
    let user1=new User({
        username:"sherlockomeals",
        addresses:[
            {
            //if I want to not create an id for individual address then _id:false
            _id:false,
            location:"A-22,Vijay Nagar,Mohan garden,UttamNagar,NewDelhi",
            city:"Delhi",
          },
    ]
    });

    user1.addresses.push({location:"P32 wallstreet",city:"London"});
    let result=await user1.save();
    console.log(result);
}

addUsers();