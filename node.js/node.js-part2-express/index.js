const express = require("express");
const app = express();
// console.dir(app);

let port = 3000; 

//creating server
app.listen(port, () => {
    console.log(`app is listening to port ${port}`);
})

//handling requests
// app.use((req, resp) => {
//     // console.log(req);
//     console.log("request received");
//     resp.send("<h1>Standard Response</h1>"); //sending a response returns html 
// });


//GET Request
app.get("/", (req, res) => {
    res.send({
        name: "apple",
        color: "red"
    }); //sending a response retuns object
});

app.get("/apple", (req, res) => {
    res.send("you contacted apple path.");
});

app.get("/orange", (req, res) => {
    res.send("you contacted orange path.");
})

app.get("*", (req, res) => { // * -> all requests of port instead of defined paths.
    res.send("This path does not exist.")
});

//POST Request
app.post("/", (req, res) => {
    res.send("You sent a post request to root.");
})
