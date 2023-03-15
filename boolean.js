const operators = require("./operations");

var a = process.argv[2];
var b = process.argv[3];

console.log("a = " + a);
console.log("b = " + b);
console.log("a or b = " + operators.or(a,b));
console.log("a and b = " + operators.and(a,b));