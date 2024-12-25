class Person {
    constructor(name, age) {
        console.log("Parent class constructor");
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hi, I am ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, age, marks) {
        console.log("student class constructor");
        super(name, age); //parent class constructor is being called.
        this.marks = marks;
    }

    talk() {
        console.log(`Hi, I am ${this.name}`);
    }
}

let stud1 = new Student("adma", 25, 96);
console.log(stud1.name);
console.log(stud1.talk());

class Teacher extends Person {
    constructor(name, age, subject) {       
        console.log("Teacher class constructor");
        super(name, age);//parent class constructor is being called.
        this.subject = subject;
    }
}

let stu1 = new Student("aman", 34, 89);
let t1 = new Teacher("rama", 56, "Math");
console.log(t1.talk()); //Inherits from parent class


//Another example of inheritance
class Mammal{ //base class //parent class
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }

    eat() {
        console.log("I am eating");
    }
}

class Dog extends Mammal{ //child class
    constructor(name) {
        super(name);
    }

    bark() {
        console.log("wooff...");
    }

    eat() {
        console.log("dog is eating");
    }
}

class Cat extends Mammal{ //child class
    constructor(name) {
        super(name);
    }

    meow() {
        console.log("meow...");
    }
}

let dog1 = new Dog("tuffi");
console.log(dog1);
console.log(dog1.eat()); //override parent class method by child class method

let cat1 = new Cat("Mussy-mi");
console.log(cat1);


//another example
class Box{
    constructor(name, l, b) {
        this.name = name;
        this.l = l;
        this.b = b;
    }

    area() {
        let area = this.l * this.b;
        console.log(`Box area is ${area}`);
    }
}

class Square extends Box{
    constructor(a) {
        super("square", a, a);
    }

    area() {
        let area = this.l * this.b;
        console.log(`Square area is ${area}`);
    }
}

let sq1 = new Square(4);
sq1.area();
