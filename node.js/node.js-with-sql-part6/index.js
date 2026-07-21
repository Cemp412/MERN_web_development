const {faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//create the connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : 'Chanchal#8',
    database: 'delta_app'
});


// GET Route
app.get('/', (req, res) => {
    let q = `SELECT count(*) from user`;
    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            let count = result[0]["count(*)"];
            res.render("home.ejs", {count});
           
        })
    }
    catch(err) {
        console.log(err);
        res.send("Some error occured in DB");
    }
   
});

//Index Route
app.get("/users", (req, res) => {
    let q = `SELECT * from user`;
    try{
        connection.query(q, (err, users) => {
            if(err) throw err;
            // console.log(result);
            res.render("index.ejs", {users});
        })
    }
    catch(err) {
        console.log(err);
        res.send("Some error in DB");
    }
});

//Edit Route
app.get("/user/:id/edit", (req, res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id= '${id}'`;
    
    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            // console.log(user);
            res.render("edit.ejs", {user});
        });

    }
    catch(err) {
        console.log(err);
        res.send("some error in DB");
    }
});

//PATCH/UPDATE ROUTE
app.patch("/user/:id", (req, res) => {
    let {id} = req.params;
    let {password:formPass, username: newUsername } = req.body;
    let q = `SELECT * FROM user WHERE id= '${id}'`;
    
    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];

            if(formPass != user.password) {
                return res.send("Wrong Password");
            }
            else{
                let q2 = `UPDATE user SET username='${newUsername}' where id='${id}'`;
                // console.log(q2);

                connection.query(q2, (err, result) => {
                    if(err) throw err;
                   return res.redirect("/users");
                });
            }
        });

    }
    catch(err) {
        console.log(err);
        res.send("some error in DB");
    }
})


app.listen(port, () => {
    console.log(`server is listening to port: ${port}`);
});