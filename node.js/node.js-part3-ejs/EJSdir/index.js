const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); //setting path when running server from outside.
app.get("/", (req, res) => {
    res.render("home.ejs");
})

//Passing data to EJS
app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6 ) + 1;
    res.render("rollDice.ejs", {num: diceVal});
})

//Activity:  Create a basic Template for instagram page
app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    // console.log(username)
    const followers = ["adam", "bob", "steve", "hawit"];
    res.render("instagram.ejs", { username, followers })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})