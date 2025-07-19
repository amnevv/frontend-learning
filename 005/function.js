// Function Declaration
function myFunc() {
    console.log("my func");
}
// Function expression
const myFunc1 = function() {
    console.log("my func 1");
}

const myFunc2 = () => {
    console.log("my func 2");
}

const obj = {
    myFunc3: () => {
        console.log("my func 3")
    },
    myFunc4: function() {
        console.log("my func 4");
    }
}

myFunc();
myFunc1();
myFunc2();
obj.myFunc3();
console.log(obj.myFunc4());
