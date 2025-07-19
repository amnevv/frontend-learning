let starter = 20;
let round = 10;

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

for (var i = starter; i < (starter+round); i++) {
    console.log(`Round: ${i}`);
}

const arr1 = [1,2,3,4,5,6];

// arr1[0] => 1
// arr.length => 6

// i = 0
// i = 1
// i = ..
// i = 5

arr1.push(7);
arr1.push(8);

for(var i = 0; i < arr1.length; i++) {
    console.log(`Arr Index ${i} = ${arr1[i]}`);
}

var a = 0;

// for (expression 1; expression 2; expression 3) {
//     code block to be executed
//  }

//  Expression 1 is executed (one time) before the execution of the code block.
  
//  Expression 2 defines the condition for executing the code block.
//  i < (number or whatever variable that contains value)
  
//  Expression 3 is executed (every time) after the code block has been executed.


for (var i = 0; i < 5; i++) {
    console.log(i);
}
