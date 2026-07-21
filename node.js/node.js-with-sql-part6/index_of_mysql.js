// Use faker 
// npm i @faker-js/faker

const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

//create the connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : 'Chanchal#8',
    database: 'delta_app'
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}

let q = "INSERT INTO user (id, username, email, password) VALUES ?";
/* let users = [
    ['123c', '123_newuserc', 'newuserc@mailinator.com', 'newuserc'], 
    ['123d', '123_newuserd', 'newuserd@mailinator.com', 'newuserd'],
  ]; */

  let data = [];
  for(let i= 1; i<=100; i++) {
    data.push(getRandomUser()); //100 fake users;
  }

try{
  connection.query(q, [data], (err, result) => {
      if(err) throw err;
      console.log(result);
      console.log(result.length);
      console.log(result[0]);
      console.log(result[1]);
  });
}
catch (err) {
  console.log(err);
}

connection.end();


// console.log(getRandomUser());
// export const users = faker.helpers.multiple(createRandomUser, {
//   count: 5,
// });