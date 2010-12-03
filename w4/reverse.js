

String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}

console.log("foo");
console.log("foo".reverse());