let http = require('http');
const express = require('express');
const os = require('os');
const app = express();

const PORT = 8000;
http.createServer(function(req, res) {
    res.writeHead(200, {'content-Type': 'text/plain'});
    console.log('but your heat');
    
});


console.log(os.platform());


app.get('/', (req, res) => res.send('Hello World'));
app.get('/hh', (req, res) => res.send('Hi bro'));
app.listen(PORT);
