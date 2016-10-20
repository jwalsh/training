// Setup
// Babel is required for this example with the presets for each step in
// the review
// Look at the transformation and support presets
// Review the specific changes and transpiler options from 5.1
// See the full specification in ECMA-262
/**
   ECMAScript 2016 says that the "use strict" directive cannot be used
   in the body of a function whose parameters either have default
   values, use destructuring, or a rest parameter.
**/

// ECMA-262 (1999)
// Draft ES4 specification (2007)
// ES 3.1 -> ES5 (2008)
// ES 5.1
// ECMAScript 2015 - ES6 (2015)
// ECMAScript 2016
// ES 2017



// ES5.1
// Functions: getter and setter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
var log = ['test'];
var obj = {
  get latest () {
    if (log.length == 0) return undefined;
    return log[log.length - 1];
  }
};
console.log ('ES2015: getters', obj.latest); // Will return "test".

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
var methods = {
  foo() { console.log('ES2015: method definitions', 'foo'); },
  bar() {}
};
methods.foo();

// ES2015: Test that transpiling is enabled
console.log('ES2015: arrow functions', [1, 2, 3].map(n => n + 1));

// ES2015: Test that destructuring is provided
let person = { first: 'Jane', last: 'Doe' };
let { first: f, last: l } = person; // (A)
console.log('ES2015: destructuring', f, l);

// ES2016: exponetiation
console.log('ES2016: exponetiation', 2 ** 4);
console.log('ES2016: Array.prototype.includes', [1,2,4,8,16].includes(4));



// Validate the ES2016 examples for strict in function
// https://www.nczonline.net/blog/2016/10/the-ecmascript-2016-change-you-probably-dont-know/

// this is okay
function doSomething1(a, b) {
  "use strict";
  return [1, a, b];
}
console.log('ES2015: use strict parameters', doSomething1(1,1));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
// syntax error in ECMAScript 2016
// Non-simple parameter in strict mode
function doSomething2(a, b=0) {
  // "use strict";
  return [2, a, b];
}
console.log('ES2016: Default_parameters', doSomething2(2));

//

// http://babeljs.io/docs/plugins/transform-es2015-destructuring/
// syntax error in ECMAScript 2016
// Non-simple parameter in strict mode
const doSomething3 = function({a, b}) {
  // "use strict";
  return [3, a, b];
};
console.log('ES2016: destructuring', doSomething3([3, 3, 3]));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// syntax error in ECMAScript 2016
const doSomething4 = (...a) => {
  // "use strict";
  return [4, a];
};
console.log('ES2016: rest parameters', doSomething4(4, 4, 4, 4, 4));

const d5 = {
  // syntax error in ECMAScript 2016
  doSomething5({a, b}) {
    // "use strict";
    return [5, a, b];
  }
};

console.log('ES2016: destructuring', d5.doSomething5(5,5));

// Generators (15 - 17)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
function* idMaker(){
  var index = 0;
  while(index < 3)
    yield index++;
}

var gen = idMaker();
gen.next().value; // 0
console.log('ES2015: function generators', gen.next().value); // 1


// syntax-trailing-function-commas
// http://babeljs.io/docs/plugins/transform-async-to-generator/
function a2() {
  return 1;
}
async function a1() { await bar(); }
a1().then(d => { console.log('ES2017: async-to-generator', d); });
