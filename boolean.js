var a = process.argv[2];
var b = process.argv[3];
var and = a && b;

console.log("a = " + a);
console.log("b = " + b);
console.log("a or b = " + a || b);
console.log("a and b = " + and);