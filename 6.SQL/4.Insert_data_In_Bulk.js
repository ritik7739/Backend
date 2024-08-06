const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

  // create the connection to database
  const connection =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta',
    password: 'Ritik1412@'
  });
  
  let data=[];

  let getRandomUser=()=>{
    return [
       faker.string.uuid(),
       faker.internet.userName(),
       faker.internet.email(),
       faker.internet.password()
    ];
  }
  //Generate 100 fake data
  for(let i=1;i<=100;i++){
    data.push(getRandomUser());
  }

  //insert into table
  let q="INSERT INTO user(id,username,email,password) VALUES ?";
  try{
  connection.query(q,[data],(err,result)=>{
      if(err) throw err;
      console.log(result);
  });
}catch(err){
  console.log(err);
}

connection.end();