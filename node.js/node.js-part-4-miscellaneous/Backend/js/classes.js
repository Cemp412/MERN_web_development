class Mammal { //base class
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }

    eat() {
        console.log("I am eating");
    }
}

class Cat extends Mammal { //child class
    constructor(name) {
        super(name);
    }

    mew() {
    console.log("I can say mew-mew");
    }
}

class Dog extends Mammal{
    constructor(name) {
        super(name);
    }

    bark() {
        console.log("I can bark whooff-whooff");
    }
}

let cat1 = new Cat("Kitty");

let dog1 = new Dog("Duggu");
console.log(dog1.type);
console.log(dog1.name);