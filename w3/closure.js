// jdf, 144

require('sys');

uniqueId = (function(id) { 
  var id = id || 0;
  console.log(id);
  return function () { this.id = ++id; return id };

}(100));

console.log(uniqueId.toString());

console.log(uniqueId());
console.log(uniqueId());

uniqueId.id = 200;
console.log(uniqueId());
// console.log(uniqueId.id);
console.log(uniqueId());


console.log("Properties of uniqueId:")
for (var p in uniqueId) { console.log(p); } ;

try { 
  console.info("Looking for child properties of an internal function:");
  console.log(uniqueId.id); 
}
catch(er) {
  console.error(er)
}

console.log(uniqueId());
