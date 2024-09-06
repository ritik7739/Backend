const mongoose=require("mongoose");
const {Schema}=require("mongoose");

//const connection setup
main().then(()=>{
    console.log("Successfully connected to Db");
}).catch((err)=>{
    console.log(err);
});

async function main(){
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

//Order Schema
const OrderSchemas=new Schema({
    item:String,
    price:Number,
});

//Customer Schema
const CustomerSchemas=new Schema({
    name:String,
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref:"Order", //refernce collection where we store order
        }
    ]
})

const Order=mongoose.model("Order",OrderSchemas);
const Customer=mongoose.model("Customer",CustomerSchemas);

const addCustomer=async()=>{
    let cust1=new Customer({
        name:"Rahul Kumar",
    });
    
    let order1=await Order.findOne({item:"Bread"});
    let order2=await Order.findOne({item:"Samosha"});
    let order3=await Order.findOne({item:"Milk"});

    // cust1.orders.push(order1);
    // cust1.orders.push(order2);
    cust1.orders.push(order3);

    let res=cust1.save();
    console.log(res);
}

// const addOrder= async()=>{
//     let res=await Order.insertMany([
//         {item:"Samosha",price:10},
//         {item:"Bread",price:28},
//         {item:"Milk",price:35},
//     ]);
//     console.log(res);
// };

// addOrder();

addCustomer();