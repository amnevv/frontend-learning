// Given array of number
const arr = [5, 6, 7, 2, 1, 2];

// Expected sum of number in array (5 + 6 + 7 + 1 + 2) = ?
// let sum = 0;
// sum += i; // 0, 1, 2
// What if we push new value into arr with arr.push() How can we handle it ?
arr.push(10)
// Sum value should include 10

let sum = 0

for ( var i = 0; i < arr.length; i++) {
    sum += arr[i]; // statement
}

console.log(sum);