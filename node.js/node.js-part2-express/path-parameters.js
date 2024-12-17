const express = require("express");
const app = express();
// console.dir(app);

let port = 3000; 

//creating server
app.listen(port, () => {
    console.log(`app is listening to port ${port}`);
})

//Path parameters
app.get("/:username/:id", (req, res) => {
    // console.log(req.params);
    let { username, id} = req.params
    res.send(`welcome to the page of @${username}`);
})


//Query Strings
app.get("/search", (req, res) => {
    // console.log(req.query);
    let {q} = req.query;
    if(!q) {
        res.send("Nothing searched");
    }
    res.send(`Search results for query: ${q}`)
})