require('sys');

// http://brendaneich.com/2010/11/paren-free/

function make() {
  var a = [];
  for (var i = 0; i < 3; i++)
    a.push(function () { return i; });
  return a;
}

console.log(make.toString());
var a = make();
console.log(a[0]());
console.log(a[1]());
console.log(a[2]());

function make2() {
  var a = [];
  for (var i = 0; i < 3; i++)
    a.push(
      function (i) { 
        return function() { return i; } 
      }(i));
  return a;
}

console.log(make2.toString());
var b = make2();
console.log(b[0]());
console.log(b[1]());
console.log(b[2]());