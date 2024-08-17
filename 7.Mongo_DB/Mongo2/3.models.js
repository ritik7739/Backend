const mongoose = require('mongoose');

main()
.then(()=>console.log("connected to mongodb suceesfully"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


//Schemas
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});
//Models

//create collection
// const User=mongoose.model("User",userSchema);
const Employee=mongoose.model("Employee",userSchema);