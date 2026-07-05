let arr = [1, 2, 3];
arr.sayHello = () => {
 console.log("Hello, I am arr");
}

let arr2 = [4, 6, 7];
arr.__proto__.push = (n) => { console.log("pushing number : ", n);}

arr2.sayHello = () => {
    console.log("Hello, I am arr");
}

console.log(arr.sayHello === arr2.sayHello);

/***************** Factory Functions ********************* */
function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`You are talking to ${this.name}`);
        },
    }
    return person;
}

let p1 = PersonMaker("alok", 56);
console.log(p1);
console.log(p1.talk());

/******************** New Operator ************* */
//Constructors - doesn't return anything & start with Capital letter
function Person(name, age) {
   this.name = name;
   this.age = age;
   console.log(this);
}

Person.prototype.talk = function() {
    console.log(`Hi, my name is ${this.name}`);
}

let p = new Person("adaan", 59); //new keyword used
let p2 = new Person("advik", 23);

/********** Classes *********************** */
class People{
    constructor(name, age) {
        console.log("Parent class constructor");
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

    // let pr1 = new People("owesh", 23);
    // let pr2 = new People("wyam", 33);

/*************** Inheritance *****************/
class Student extends People{
    constructor(name, age, marks) {
        console.log("Student class constructor");
        super(name,age); //parent class constructor is being called.
        
        this.marks = marks;
    }
    // talk() {
    //     console.log(`Hi, I am ${this.name}`);
    // }
    //extend talk function from parent class
}

let stu1 = new Student("adAM", 12, 89);


class Teacher {
    Constructor(name, age, subject) {
        this.name = name;
        this.age = age;
        this.subject = subject;
    }
    talk() {
        console.log(`Hi, I am ${this.name}`);
    }
}

let tr1 = new Teacher("maya", 12, "Maths");

