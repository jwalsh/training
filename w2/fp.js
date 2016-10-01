// https://danmartensen.svbtle.com/javascripts-map-reduce-and-filter

var a = [1,2,3,4,5];

// map()
var double = function(n) {
  return n * 2;
};

var b =[]
// for (var i = 0; i < a.length; i++) {
//   b.push(double(a[i]));
// }
console.log(b);

var c = [];
// var c = a.map(function(e, i, c) {
//   return double(e);
// });

console.log(c);
