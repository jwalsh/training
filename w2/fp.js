// https://danmartensen.svbtle.com/javascripts-map-reduce-and-filter

var a = [6,7,1,2,3,4,5];

// map()
var triple = function(n) {
  return n * 3;
};

 for (var i = 0; i < a.length; i++) {
	a[i]= triple(a[i]);
 }
//console.log(a);

var b = a.map(function(e,i,c){
	return e*e;
});

console.log(b);

function lessthan(b){
	return b<200;
}


var c = b.filter(lessthan);

console.log(c);
