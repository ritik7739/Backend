const mongoose=require("mongoose");
const {Schema}=require("mongoose");
const { type } = require("os");

//Connected to DataBases
main().then(()=>{
    console.log("Successfully connected to the Databases");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}
const OrderSchemas=new Schema({
    item:String,
    price:Number,
});

const CustomerSchemas=new Schema(
    {
        name:String,
        orders:[
            {
            type:Schema.Types.ObjectId,
            ref:"Order", //reference collection where we store order
        },
    ]
    }
);

//Model
const Order=mongoose.model("Order",OrderSchemas);
const Customer=mongoose.model("Customer",CustomerSchemas);

const addCust=async ()=>{
    let newCust=new Customer({
        name:"Karan Johar",
    });

    let newOrder=new Order({
        item:"Pizza",
        price:250,
    });

    newCust.orders.push(newOrder);
    
    await newOrder.save();
    await newCust.save();

    console.log("added new customer");
    
}

//I just want to delete the customer and also delete the associated order but 
//The order still in the database by the below methods

const delCust =async ()=>{
    const res=await Customer.findByIdAndDelete("66d7fa676684513549ec7f86");
    console.log(res);
}
// addCust();

delCust();