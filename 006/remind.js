// Explaine about primitiv types
var a = "Mai" // string
var b = 1.4 // number
var c = true  // var c = 4 > 1
var d = false // boolean
var e = undefined 
var f              // undifined (declare variable without value)
var g = null // null (declare as empty)
console.log(g)


// How's different between var, let, const
// See var as global
var gl = 10;

if (true) {
    var gl2 = 11;

    if (true) {
        var gl3 = 12;

        for (var i = 0; i < 1; i++) {
            var gl4 = 13;
        }

        console.log(`i: ${i}`);
    }
}

console.log(gl, gl2, gl3, gl4)

let bl = 1;
let aa = 2;

console.log(`aa : ${aa}`);
if (true) {
    console.log(`aa : ${aa}`);
    let bl2 = 2;
    bl = 2;
    console.log(`bl: ${bl}`);
    for (let j = 0; j < 1; j++) {

    }

    var i = 10;

    // console.log(j); cannot log j is block-scoped.
}

console.log(`bl: ${bl}`);
console.log(`i: ${i}`);

const arr = [];
const obj = { "name": "tony"};

if (true) {
    const obj = {};
    arr.push(1); // [1] valid
    obj.name = "Ton";
    obj.lastname = "Kaewbun";
    console.log(obj);
    //obj = {};
}
obj.lastname = "Wangnurak";

console.log(obj);


// What is object and how to use it
var box = {
    size : "small",
    color : "white",
    a : function () {
        console.log("The size of box is " + this.size);
    },
    b : function () {
        console.log("This box is a gift");
    }
}
box.a();
box.b();

// What is an array and how to use it
var h = [9,8,7,6] // index is 0-3
console.log(h.length); // length of array
console.log(h[1]); // print out index 1
h[1] = 10;         // change index 1 from 8 => 10
console.log(h[1]);
h.push(5)          // insert 5 in array h 
console.log(h);
h.pop()            // pop no need to require a value
h.pop()
console.log(h);


// What is if, else and how to use it
var i = 10
var j = 12

if (i > j){
    console.log(i);
} else {
    console.log(j);
}

// var mouseColur = "red";

// if (mouseColur == "blue") {
//     console.log("Mouse is blue.")
// } else if (mouseColur == "red") {
//     console.log("Mouse is red.")
// } else {
//     console.log("Mouse is black.");
// }


// What is for loop and how to use it
for ( var k = 5; k < 10; k++ ) {
    console.log(k);
}
