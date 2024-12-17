const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); //setting path when running server from outside.
app.get("/", (req, res) => {
    res.render("home.ejs");
})

//Activity:  Instagram page with ejs (task) 
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/js")));
app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    // console.log(data)
    if(data) {
        res.render("instaData.ejs", {data});
    }
    else{
        res.render("error.ejs");
    }
    
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})