const express = require('express');
const app  = express()

// console.dir(app);

app.get('/home', function(req, res) {
    res.send("Welcome To Wonder land");
});
 const port = 3000;
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

app.use((req, res) => {
    console.log("request receiveed")
    res.send("This is a basic response");
});