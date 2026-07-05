//Non-blocking File read
const fs = require('fs');
// console.log("Before File read");
// fs.readFile('myFile.txt', 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log('File contents:', data);
// });
// console.log("After file read.");
//Notice how "After file read" is printed before the file contents, showing that Node.js does not wait for the file operation to finish.

//Blocking code
console.log("Start of blocking of code");
const data = fs.readFileSync('myFile.txt', 'utf8');
    console.log("File content: ",  data);

console.log("Blocking operation completed");