
var readlineSync = require("readline-sync");

/*
let text = readlineSync.question(`Test\n`);
let result = text.includes("A", "a");
console.log(result);
*/

const terms = ["term1", "term2", "term3"]
const str = readlineSync.question(`term?\n`);

// check if the string has some of the terms
const result1 = terms.some(term => str.includes(term))

// check if the string has all the terms
const result2 = terms.every(term => str.includes(term))

console.log(result1);
console.log(result2);