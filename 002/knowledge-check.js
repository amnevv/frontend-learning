// create array of numbers
// create another array that equal to first array and add new value inside
// compare size of two arrays to find different length.

var a = [2, 4, 6, 8];

var b = [...a, 10]; // ...a => 2, 4, 6, 8

console.log(a);
console.log(b);

console.log(a.length-b.length);

var b = a
a.push(12);
console.log(b);


