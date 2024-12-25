function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi, my name is ${this.name}`);
        },
    }
    return person;
}

let p1 = PersonMaker("adma", 25);
console.log(p1);
console.log(p1.talk());
let p2 = PersonMaker("anil", 56);
console.log(p2);