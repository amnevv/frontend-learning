// Declare function that has 1 parameter which is number
// Must return value that is multiplied by 10
// function a(100) => [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// function a(55) => [10, 20, 30, 40, 50]

// func => num
// return => num % 10 == 0

function a(num) {
    const arr = []

    for (var n = 1; n <= num; n++) {
        if (n % 10 == 0) {

            arr.push(n)
            
        }
    }

    return arr;
}

var result = a(100); // arr
console.log(result);




// Get result from a function and modify it with another function by using HOF
// function modify(arr, func) => [2, 4, 6 ,8 ,10, 12, 14, 16, 18, 20]
// function dividedByFive() {
//    return something
// }
// modify([10, 20, 30], dividedByFive) => [2, 4, 6]

function modify(result, func) {
    const newArr = [...result];

    for (var x = 0; x < result.length; x++){
        newArr[x] = func(newArr[x]);
    }
    return newArr;
}

function dividedByFive(val) {
   return val / 5;
}

var num = 200;
const modifyArray = modify(a(num), dividedByFive)
console.log(modifyArray);

