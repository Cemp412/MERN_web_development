const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid'); //creating uuid using a package
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
var methodOverride = require('method-override'); 
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));

let posts = [
    {
        id: uuidv4(),
        username: "apna room",
        content: "I love to code",
    },
    {
        id: uuidv4(),
        username: "preeti",
        content: "Hard work is important to achieve success",
    },
    {
        id: uuidv4(),
        username: "sarita",
        content: "I love coding",
    }
];

//GET Route
app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

//POST Route
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    posts.push({ username, content});
    console.log(req.body);
    res.redirect("/posts");
});

//SHOW Route
app.get("/posts/:id", (req, res) => {
    let { id } = req.params; 
    let post = posts.find((p) => id === p.id);
    console.log(post);
    res.render("show.ejs", {post});
})

//Show Route
app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id );
    res.render("edit.ejs", {post});
});

//Update Route
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

//Delete Route
app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    // res.send("Post deleted");
    res.redirect("/posts");
})

app.listen(port, () => {
    console.log("listening to port: 8080");
});


