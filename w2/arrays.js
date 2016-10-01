// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


var a = [1,2,3,4,5,7,7,7,8,9];

var b = Array.from([])
var c = Array.of(3)

var d = a.concat(b)
var e = a.copyWithin(-2)
var eArr = a.entries()
var f = eArr.next().value;

var g = a.every(e => e > 0)
var h = a.fill(5)
a.filter((e, i, c) => e > 2)
a.find(e => e < 3)
a.findIndex(e => e % 2 === 0)
a.forEach(e => e * 2)
// a.includes(2)
a.indexOf(3)
a.join(b)
a.keys(a)
a.lastIndexOf(3)
a.map(e => e * 3)
a.pop()
a.push(2)
a.reduce((a,b) => a + b, 0)
a.reduceRight((a,b) => a + b, 0)
a.reverse()
a.shift()
a.slice(2)
a.some(e => e > 4)
a.sort()
a.splice()
a.toLocaleString()
// a.toSource()
a.toString()
a.unshift()
// a.values()

console.log(a);
