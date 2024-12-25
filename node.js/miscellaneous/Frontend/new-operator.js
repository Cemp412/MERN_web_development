//Constructors- doesn't return anything & start with capital letter
function Person(name, age) {
    this.name= name;
    this.age = age;  
}

Person.prototype.talk = function() {
    console.log(`Hi, my name is ${this.name}`);
}

let p1 = new Person("adam", 25);
let p2 = new Person("eve", 45);
console.log(p1.talk() === p2.talk()); //returns true because talk function is prototype of person object and p1 and p2 are instances of these objects.