//declare variables
const val = 20;

function welcome(user) {
    return `Welcome ${user}`;
}

//Arrow function (ES6+)
const add = (a,b) => a+b;
console.log(welcome('Developer'));
console.log(add(6,2));

//object
const user = {
    name: 'Alice',
    age: 25,
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    },
    myCars: {
        car1:"Ford",
        car2:"BMW",
        car3:"Fiat"
    }
};
delete user.name; //delete object properties
console.log(user.myCars.car2);

//Array 
const colors = ['red', 'green', 'yellow'];

//Array methods
colors.forEach(color => console.log(color));
const lengths = colors.map(color => color.length);
console.log(lengths);

//Asynchronous Programming 
//callbacks
function fetchData(callback) {
    setTimeout(() => {
        callback('Data received');
    }, 1000);
}


//Promises
const fetchDataPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Promise resolved!'), 2000);
    }); 
}

//async/ await
async function getData() {
    const result = await fetchDataPromise();
    console.log(result);
}

getData(); //call the async function


//Template literals
const { name } = "user";
console.log(`Hello ${name}`);