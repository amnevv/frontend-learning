// Given two arrays
const arr1 = [1, 3, 5, 7, 9, 11, 12];
const arr2 = [6, 5, 4, 3, 2, 1, 0, -1, -2];

// Sum two arrays on each index and put into new arr using for loop
// log => [7, 8, 9, 10, 11, 12, 12]
// Hint: arr[i], arr.length; arr.push()

a = arr1
b = arr2
const arr3 = []
var round;
if (arr1.length > arr2.length) {
    round = arr1.length;
} else {
    round = arr2.length;
}

for ( var i = 0; i < round; i++) {
    if (a[i] && b[i]) {
        arr3.push(a[i] + b[i]);
    } else if (a[i]) {
        arr3.push(a[i]);
    } else if (b[i]) {
        arr3.push(b[i])
    }
}
console.log(arr3);


