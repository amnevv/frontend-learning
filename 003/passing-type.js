// passing by value (primitive types)
var a = 123;
var b = a;
var e = 0;
//console.log(a,b);
b = 0;
console.log(a,b);

// passing by reference
// Arrey
var c = [1,2,3]; // [1,2,3] => Memory => Ox1234
var d = c; // d => Ox1234
d.push(4); // push 4 into array that reference to 0x1234
console.log(c,d);
d = [5]; // [5] => Memory => Ox4321
console.log(c,d);
c = d; // c => Ox4321
d.push(6); // push 6 into array that reference to 0x4321
console.log(c,d);
var arr1 = []; // Ox5555
var arr2 = []; // Ox6666

// Object
const dog = {
    name: "judy",
    age: 4,
}
const copyDog = dog;
copyDog.name = "Ton";
console.log(dog,copyDog);



