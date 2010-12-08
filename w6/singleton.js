// JP, ch. 7

var o1 = { name: "" };
var o2 = { name: "" };

console.log(o1 === o2);
console.log(o1 == o2);

function Universe() { };

var u1 = new Universe();
var u2 = new Universe();

console.log(u1 === u2);

console.log(typeof Universe.__proto__.constructor);
