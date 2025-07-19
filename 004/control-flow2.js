// for loop

var a = 0;
++a; // a += 1; statement
a++; // a += 1;
a--; // a -= 1;
--a; // a -= 1;

//console.log(a)

var b = 0;
var c = ++b; // b += 1, b = 1, c = b

//console.log(b,c);

var d = 0;
var e = d++; // d = 0, e = d;



for (var i = 2; i < 5; i++) {
    console.log(i);
}

for ( var i = 0; i < 10; i += 2 ) {
    console.log(i);
}

for ( var i = 10; i >= 0; i -= 1 ) {
    console.log(i);
}

/*
*
* *
* * *
* * * *
* * * * *
*/

var str = "";
for ( var i = 0; i <= 4; i += 1){
    str += "* ";
    console.log(str);
}

// 2x1 = 2
// 2x2 = 4
// ...
// 12x12 = 144
for ( var a = 2; a <= 12; a +=1 ) {
    for ( var b = 1; b <= 12; b += 1 ) {
        console.log (`${a} x ${b} = ${a*b}`);
    }
}


console.log('this is a \'single \nquote\'');
console.log(`
    this is 
    string
    "stre"
    'ster'
    `) // template literal string