const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");
app.use(cookieParser("secretcode"));

//Send Signed cookies
app.get("/getsignedcookie",(req,res)=>{
    res.cookie("made-In","India",{signed:true});
    res.send("signed cookie sent");
});

//Verify Signed cookie
app.get("/verify",(req,res)=>{
    console.log(req.signedCookies);
});


app.get("/getCookies",(req,res)=>{
    // Set cookies before sending the response
    res.cookie("Made In","India");
    res.cookie("greet","namaste");
    // Send the response
    res.send("Cookies is send!!");
});

app.get("/setCookies",(req,res)=>{
    console.dir(req.cookies);
    res.send("send the cookies");
});

app.get("/accessCookies",(req,res)=>{
    let {name="ananymous"}=req.cookies;
    res.send(`Hi,${name}`);
})

app.listen(3000,()=>{
    console.log(`app is listening on port :3000`)
});