const express=require("express");
const router=express.Router();


//Index-users
router.get("/",(req,res)=>{
    res.send("GET posts routes")
});

//show-users
router.get("/:id",(req,res)=>{
    res.send("GET posts routes id");
});

//post -users
router.post("/",(req,res)=>{
    res.send("POST posts routes");
});

//delete -users
router.delete("/:id",(req,res)=>{
    res.send("DELETE posts routes id");
});

module.exports=router;
