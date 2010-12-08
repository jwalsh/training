// See JP, p. 127

// ================================
// Classical default pattern
function inherit1(C, P) {
  C.prototype = new P();
}


// ================================
// Rent a constructor
function inherit2() {
  // TODO: This generally relies on the application of apply()
}

// ================================
// Rent and set prototype 
function inherit3() {
  
}

// ================================
// Share the prototype 
function inherit4() {
  
}

// ================================
// A temporary constructor: proxies
function inherit5(C, P) {
  var F = function() {};
  F.prototype = P.prototype;
  C.prototype = new F();
  C.uber = P.prototype;
  C.prototype.constructor = C;
}

// ================================
// Examples 

// ================================
// Logical 
function Parent() {}
Parent.prototype.say = function() { return this.name };

function Child() {}

inherit(Child, Parent);

var kid = new Child();
console.log('==================');
console.log(typeof kid);
console.log(kid.constructor.name);
console.log(kid.__proto__);
console.log('==================');
for (var p in kid) {
  console.log(p);
}

// ================================
// Articles 

// ================================
// People 
function Person(name) {
  this.name = name || 'Josh';
  this.address = '123 Main Street';
}

function Developer() {
  this.role = 'Developer';
}

inherit(Developer, Person);

var jason = new Developer();
jason.name = 'Jason';
jason.phone = '2061234567';

console.log('==================');
console.log(jason.name + ' is a ' + jason.role);
for (var p in jason) {
  console.info(p);
}


