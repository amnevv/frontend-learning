// let input be a number
let a = 30

// If input number can divided by 3, print {NUMBER} can divided by 3
if (a%3 == 0){
//    console.log(a + " can divided by 3");
}

// If number can divided by 5, print {NUMBER} can divided by 5
if (a%5 == 0){
//    console.log(a + " can divided by 5");
}

// If number can divided by 3 and 5, print {NUMBER} can divided by 3 and 5
if ((a%3 == 0) && (a%5 == 0)){
//    console.log(a + " can divided by 3 and 5");
}

// If number can divided by 3 and 5, print {NUMBER} can divided by 3 and 5
// print as once
if ((a%3 == 0) && (a%5 == 0)){
    console.log(a + " can divided by 3 and 5");
} else if (a%3 == 0){
    console.log(a + " can divided by 3");
} else if (a%5 == 0){
    console.log(a + " can divided by 5");
}    

var e = 3%2;
