const mongoose=require("mongoose");
const {Schema}=require("mongoose");
const { types } = require("util");

//connect to the DB
main().then(()=>{
    console.log("Successfully connected to DB");
}).catch((err)=>{
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const OrderSchemas=new Schema({
    item:String,
    price:Number,
});

const customerSchemas=new Schema({
    name:String,
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref:"Order",
        }
    ]
});

// customerSchemas.pre("findOneAndDelete",async(data)=>{
//     console.log("PRE MIDDLEWARE");
// });

//POST MIDDLEWARE
customerSchemas.post("findOneAndDelete",async(customer)=>{
    if(customer.orders.length){
       let res=await Order.deleteMany({ _id: { $in:customer.orders}});
       console.log(res);
    }
});

//model

const Order=mongoose.model("Order",OrderSchemas);
const Customer=mongoose.model("Customer",customerSchemas);

const addCust = async ()=>{
    let newCust=new Customer({
        name:"Ankit",
    });

    let newOrder=new Order({
        item:"Burgur",
        price:200,
    });

    newCust.orders.push(newOrder);
    await newOrder.save();
    await newCust.save();

    console.log("customer added sucessfully");
}

// addCust();

const delCust=async ()=>{
    let data= await Customer.findByIdAndDelete("66d5a534e4d4e77ebfe32eff");
    console.log(data);
}

delCust();