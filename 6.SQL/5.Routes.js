const express=require("express");
const app=express();
const path=require("path");
const mysql=require("mysql2");
const port=3000;
const methodOverride=require("method-override");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride("_method"));

 // create the connection to database
 const connection =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta',
    password: 'Ritik1412@'
  });


app.get("/",(req,res)=>{
    let q=`SELECT count(*) FROM user`;
    try{
        connection.query(q,(err,result)=>{
          if(err) throw err;
          let count=result[0]["count(*)"];
          res.render("home.ejs",{count});
        });
    }catch(err){
        console.log(err);
        res.send("Some error in DB");
    }
});

//All Users Route
app.get("/users",(req,res)=>{
    let q=`SELECT * FROM user`;
    try{
        connection.query(q,(err,results)=>{
          if(err) throw err;
          res.render("users.ejs",{results});
        });
    }catch(err){
        console.log(err);
        res.send("Some error in DB");
    }
});

//Edit User Route

app.get("/users/:id/edit",(req,res)=>{
    let {id}=req.params;
    let q=`SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q,(err,results)=>{
          if(err) throw err;
          let user=results[0];
          res.render("edit_username.ejs",{user});
        });
    }catch(err){
        console.log(err);
        res.send("Some error in DB");
    }
});

//Update (DB) Route
app.patch("/users/:id",(req,res)=>{
    let {id}=req.params;
    let{password:formPass,username:formUsername}=req.body;
    let q=`SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q,(err,results)=>{
          if(err) throw err;
          let user=results[0];
          if(formPass != user.password){
            res.send("Wrong Password");
          }else{
            let q2=`UPDATE user SET username='${formUsername}' WHERE id='${id}' `;
            connection.query(q2,(err,result)=>{
                if(err) throw err;
                res.redirect("/users");
            });
           } 
        });
    }catch(err){
        console.log(err);
        res.send("Some error in DB");
    }
});

//ADD USER TO DB
app.get("/users/addnew",(req,res)=>{
    res.render("addnew.ejs");
});

app.post("/users",(req,res)=>{
    let {id,username,email,password}=req.body;
    let q=`INSERT INTO user(id,username,email,password) VALUES('${id}','${username}','${email}','${password}')`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            res.redirect("/users");
        });
    }catch(err){
        console.log(err);
        res.send("Some error In dB");
    }
});

//DELETE USER FROM DB
app.delete("/users/:id",(req,res)=>{
    let {id}=req.params;
    let q3=`DELETE FROM user WHERE id='${id}'`;
    try{
    connection.query(q3,(err,result)=>{
        if(err) throw err;
        res.redirect("/users");
    });
}catch(err){
    console.log(err);
    res.send("Some error in DB")
}
});

app.listen(port,()=>{
    console.log(`app is listening on ${port}`);
});