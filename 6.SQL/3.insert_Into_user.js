const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

  // create the connection to database
  const connection =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta',
    password: 'Ritik1412@'
  });
  

  //insert into table
  let q="INSERT INTO user(id,username,email,password) VALUES ?";
  let users=[["123b","123_newuserb","abc@gmail.comb","abcb"],
  ["123c","123_newuserc","abc@gmail.comc","abcc"]];
  try{
  connection.query(q,[users],(err,result)=>{
      if(err) throw err;
      console.log(result);
      console.log(result.length);
      console.log(result[0]);
      console.log(result[1]);
  });
}catch(err){
  console.log(err);
}

connection.end();