const express=require("express");
const router=express.Router();


//Index-users
router.get("/",(req,res)=>{
    res.send("GET users routes")
});

//show-users
router.get("/:id",(req,res)=>{
    res.send("GET users routes id");
});

//post -users
router.post("/",(req,res)=>{
    res.send("POST users routes");
});

//delete -users
router.delete("/:id",(req,res)=>{
    res.send("DELETE users routes id");
});

module.exports=router;
