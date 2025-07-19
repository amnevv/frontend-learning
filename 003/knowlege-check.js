// let input b a number
let b = [10, 20, 30];

// If number can divided by 3, print {NUMBER} can divided by 3
b.forEach(num => {
    if (num % 3 === 0) {
        console.log("The number is " + num);
    }
});

// If number can divided by 5, print {NUMBER} can divided by 5
b.forEach(num => {
    if (num % 5 === 0) {
    console.log("The number is " + num);
}
});
// If number can divided by 3 and 5, print {NUMBER} can divided by 3 and 5
b.forEach(num => {
    if ((num % 3 === 0) && (num % 5 === 0)) {
    console.log("The number is " + num);
}
});

// If cannot divided by 3,5; print {NUMBER} cannot divided by 3,5
b.forEach(num => {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(num);
    } else {
        console.log(`${num} cannot be divided by 3,5`);
    };
});

// Example 
// number is 3,  3 can divided by 3
// number is 5,  5 can divided by 5
// number is 15, 15 can divided by 3 and 5
// Hint: using modulo
