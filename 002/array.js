// Array ( index start with 0, can store any data type )
var a = [ 
    123, 
    "str", 
    null, 
    undefined, 
    function(){
        console.log("Hello world!"); 
    },
    [1,2,3],
    {name: "John", age: 23},
    true
]
console.log(a[1]);

var b = [20, 10, 4, 3, 6, 9, 11, 34, 55]
console.log(b.length); // Find size of array
console.log(b[0]+b[9]);
// if we do not know last index, how to do it
console.log(b[0]+b[b.length-1]);

b.push(b[7])
console.log(b);

b.pop();
console.log(b);
