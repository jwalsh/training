a = "global";
function f(a) {
  console.log(a);
  var a = "local";
  console.log(a);
}
console.info("# check global");
console.log(a);

console.info("# check function");
f();

console.info("# check function with param");
f("param")