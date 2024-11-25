//if conditional statement
console.log("Before my if statement");
let age = 23;
if(age >= 18) {
    console.log("You can vote");
}

if(age < 18){
    console.log("You can not vote");
}
console.log("After if statement");

let user = {};
user.firstName = "Anika";

if(user.firstName == "Anika") {
    console.log(`Welcome ${user.firstName}`);
}


//if-else if conditional statement
let marks = 85
if( marks >= 80) {
    console.log("A+");
}
else if(marks >= 60){
    console.log("A");
}

//if else statement
// let age = 16;
if(age >= 18) {
    console.log("You can vote");
}
else{
    console.log("You can not vote");2
}


//if else-if else statement
if(color === "red") {
    console.log("stop");
}else if(color === "yellow") {
    console.log("slow down");
}else if(color === "green") {
    console.log("go");
}
else{
    console.log("traffic light is broken");
}

