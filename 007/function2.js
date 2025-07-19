// Check number is an even or not. By using function declaration
// Example. 
// IsEven(4) => 4 is even.
// IsEven(3) => 3 is odd.

function isEven(number) {
    if (number%2==0) {
        return `${number} is even`; 
    } else {
        return `${number} is odd`; 
    }
}
console.log(isEven(4));
console.log(isEven(3));


for ( var a = 0; a < 101; a++) {
    console.log(isEven(a));
}