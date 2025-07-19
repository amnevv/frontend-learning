const arr1 = [1, 3, 5, 7, 9, 11, 12];
const arr2 = [6, 5, 4, 3, 2, 1, 0, -1, -2];

const arr3 = [];

// # Solution 1
const selectedArr = (arr1.length > arr2.length) ? arr1 : arr2; // longest array

// if (arr1.length > arr2.length) {
//     selectedArr = arr1;
// } else {
//     selectedArr = arr2;
// }

function loop(val, index, arr) {
    console.log(val, index);
}

// const myFunc = function(val, index, arr) {
//     console.log(val, index);
// };

// const myFunc2 = (val, index, arr) => {
//     console.log(val, index);
// }

// selectedArr.forEach(loop);
// selectedArr.forEach(myFunc);
// selectedArr.forEach(myFunc2);
// selectedArr.forEach((val, index, arr) => {
//     console.log(val, index);
// })
// selectedArr.forEach(function(val, index, arr) {
//     console.log(val, index);
// })
selectedArr.forEach((_, index) => {
    if (arr1[index] && arr2[index]) {
        arr3.push(arr1[index] + arr2[index]);
    } else { 
        arr3.push((arr1[index] || arr2[index])) 
    }
})


// push(), pop(), forEach(), filter(), 

console.log(arr3);

// # Solution 2
// function forEach(callbackFn) {
//     for (var i = 0; i < selectedArr.length; i++) {
//         callbackFn(selectedArr[i], i, selectedArr)
//     }
// }

// forEach((_, index) => {
//     console.log(index);
// })
