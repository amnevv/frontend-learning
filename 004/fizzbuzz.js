// Conditions
// if number divided by 3, print fizz
// if number divided by 5, print buzz
// if number divided by 3,5 print fizzbuzz

let d = 3
let str = '';

   
if (d % 3 == 0){
    str += 'Fizz';
}

if (d % 5 == 0){
    str += 'Buzz';
}

// if ((d % 3 == 0) && (d % 5 == 0)) {
//     str = 'Fizzbuzz' 
// }   


console.log(str);

    if ((d%3 == 0) && (d%5 == 0)) {
        console.log(str);
        } else if (d%3 == 0){
        console.log("fizz");
        } else if (d%5 == 0){
        console.log("buzz");
    }   
    
// How to use multiple if condition
// How to use if, else, if