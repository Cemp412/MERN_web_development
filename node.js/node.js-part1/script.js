/* let n= 5;

for(let i=0; i<n; i++) {
    console.log("hello", i);
}
console.log("bye!"); */

/* console.log(process.argv);
let args = process.argv;
for(let i =0; i < args.length; i++) {
    console.log("hello to ", args[i]);
} */

    /* const math = require('./math');
    console.log(math);
    console.log(math.sum(5, 10));

    const fruitsArr = require('./Fruits');
    console.log(fruitsArr);
    console.log(fruitsArr[0].name); */

    // import modules from other file
    import {add, z} from "./math.js";
    import { generate, count } from "random-words";

    console.log(generate());
    console.log(add(4, 7));
