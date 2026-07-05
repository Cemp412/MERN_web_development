// Node.js
global.object = {
    name: 'kiran',
    age: 62,
}

console.log(global.object.name);

//http requests

// Node.js
const https = require('https');
https.get('https://www.example.com/', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(data));
});