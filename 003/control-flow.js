// Condition will be, (if string is equal to string123 => true), (if 2 is 1 => false), (if false is true => false), (if [1,2] is [1,2,3] => false)

let cond1 = (1 !== "1");

if (cond1) {
    console.log("Condition 1 is true");
} else {
    console.log("Condition 1 is false");
}

// true && true => true
// false && true => false
// true && false => false
// false && false => false

// false || true => true
// true || false => true
// true || true => true
// false || false => false

// 2 < 1 || 1 == 1 => 1 == 1
// 2 > 1 || 1 < 2 => 2 > 1

let a = 1;
let b = 2;

if (((a == 2) || (b == 2))) {
    console.log("Condition 2 is true");
}

// false, 0, -0, 0n, "", null, undefined, NaN => falsy values
// Except from above line will be true.
// "1", " ", 1, true, [], {}, [1,2], {name: "Tony"} => truthy values
let myStr = "false";
let myUndefined = undefined;

if (myStr) {
    console.log('"false" is true');
}

if (myUndefined) {
    console.log("undefined is false");
}

console.log(undefined);


if (true) {
    console.log('Mouse is red');
} else if (false) {
    console.log('Mouse is blue');
} else if (false) {
    console.log('Mouse is black');
} else {
    console.log('Mouse is other color');
}


if (true) {
    console.log('Mouse is red');
}

if (true) {
    console.log('Mouse is blue');
}
