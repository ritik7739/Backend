const mongoose=require("mongoose");
const {Schema}=require("mongoose");


//connection to DB
main().then(()=>{
    console.log("Sucessfully connected to mongoDB");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}
//Schemas
const OrderSchemas= new Schema({
    item:String,
    price:Number,
});

const CustomerSchemas=new Schema({
    name:String,
    orders:{
        type:Schema.Types.ObjectId,
        ref:"orders",    //referance collection where we store order
    },
});

//model
const Order=mongoose.model("Order",OrderSchemas);
const Customer=mongoose.model("Customer",CustomerSchemas);


//Populating 
const findCustomer=async ()=>{
    let result= await Customer.find({}).populate("orders");
    console.log(result);
}

findCustomer();