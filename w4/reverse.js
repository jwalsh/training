// JP: (Not) Augmenting Built-in Prototypes | 19
// It’s tempting to augment prototypes of built-in constructors such as Object(), 
// Array(), or Function(), but it can seriously hurt maintainability, because it will make 
// your code less predictable


// JDG 9.2.2
// Note that you must never add properties to Object.prototype 

String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}

console.log("foo");
console.log("foo".reverse());

var o = {
  foo: "foo",
  bar: "bar"
};

console.info("# Showing simple object")
for (var p in o) {
  console.log(p);
}

Object.prototype.example = "baz";


var n = {
  foo: "foo",
  bar: "bar"
};

console.info("# Showing augmented object")
for (var p in n) {
  console.log(p);
}

