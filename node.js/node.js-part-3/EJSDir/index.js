const express = require("express");
const app =  express();
const path = require("path");
const port = 8000;

app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "public/js")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get('/', (req, res) => {
    res.render("home.ejs");
});

app.get('/hello', (req, res) =>  {
    res.send("hello");
});

app.get('/rolldice', (req, res) => {
    let diceval = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", {num:diceval});
});

app.get('/ig/:username', (req, res) => {
    const followers = ["adam", "bob", "steve", "jobs", "adan"];
    let {username} = req.params;
    res.render("instagram.ejs", {username, followers});
});

app.get('/ig-with-data-json/:username', (req, res) => {
    let { username } = req.params;
    const instaData = require('.././data.json');
    const data = instaData[username];
    // console.log(data);
    if(data) {
        res.render("instagramWithDataJson.ejs", { data });
    }
    else{
        res.render("error.ejs");
    }
    
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});