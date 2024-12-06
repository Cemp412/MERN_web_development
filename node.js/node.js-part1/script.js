//export a file
// const someValue = require('./math');
// console.log(someValue);
// console.log(someValue.sum(2, 2));

//exports all files from another directory
// const fruits = require('./fruits');
// console.log(fruits);

//import module
import {sum, PI} from "./math.js";
console.log(sum(1, 2));
import { generate} from "random-words";
console.log(generate());