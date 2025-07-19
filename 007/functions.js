// Function is a first class citizen in JS

// How to declare function
// 1. Function Declaration

function printName(x) {
    // Do something and return;
    // Consist of statments
    console.log(`My name is ${x}`);
    // return we can have or not have it
}

printName("Narawit");
printName("Chavisa");
printName(1);
printName({});
printName([]);
printName(null);

console.log('---- Func 1 ---');

console.log(`Value returned before func declared ${sum(5, 6)}`);// hoisted

function sum(a, b) {
    return a + b;
}

console.log(sum(10, 20)); // 30
var mySum = sum(1, 2);
console.log(`My sum is ${mySum}`);
console.log('---- End of function declaration ----');

// 2. Function expression
const a = 1 > 2; // false (1 > 2) is an expression

var printFullname = function(firstname, lastname) {
    return `${firstname} ${lastname}`;
}

console.log(`My name is ${printFullname("Narawit", "Kaewbun")}`); // Narawit Kaewbun
const maiName = printFullname("Chavisa", "Wangnurak");
console.log(maiName);
console.log('---- Old function expression ---');

// Arrow function
var bark = (times) => {
    let barkStr = "";
    
    for (let i = 0; i < times; i++) {
        barkStr += " Bog";
    }

    return `${barkStr} 🐶`;
}

console.log(bark(1));

// Arrow function
var meow = times => {
    let meowStr = "";
    
    for (let i = 0; i < times; i++) {
        meowStr += " Meow";
    }

    return `${meowStr} 🐈`;
}

console.log(meow(2));

var mor = () => {
    console.log(`Mor 🐮`);
}

mor();
console.log('---- End of function expression ----');

// Higher order function = function that call another function

function printName2(func) {
    let firstName = "Narawit";
    let lastName = "kaewbun";
    let prefix = "Mr.";

    return func(firstName, lastName, prefix);
}

const printTHName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
}

const printENName = (firstName, lastName) => {
    return `${lastName}, ${firstName}`;
}

console.log(printName2(printTHName));
console.log(printName2(printENName));


// [1,2,3], array * 2 => [2,4,6]
// Pure function always return the same thing and have no side effect.
function modifyArray(arr, func) {
    const newArr = [...arr];

    for (let i = 0; i < arr.length; i++) {
        newArr[i] = func(newArr[i]); // reassign value
    }

    return newArr;
}

const arr = [1, 2, 3];

const multiplyByTwo = (num) => {
    return num * 2;
}

const multiplyByThree = (val) => {
    return val * 3;
}

const multiplyBy2Arr = modifyArray(arr, multiplyByTwo);
const multiplyBy3Arr = modifyArray(arr, multiplyByThree);

console.log(multiplyBy2Arr);
console.log(multiplyBy3Arr);

