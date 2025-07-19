var a = 1 // var => global scoped
var b = 5
    if (a < 5){
        a = 2
        var b = 0
    }
   var b = 3
console.log(a);
console.log(b);
console.log("--------------- end of var---------------");

// let => block scoped
let c = 2
    if (c > 1) {
        let c = 3;
        let d = 4;
        d = 5
        console.log(c);
        
        console.log(d);
        if (d > c) {
            let c = 10;
            console.log(c);
        }
        console.log(c);
    }
    console.log(c);
    console.log("--------------- end of let---------------");

// const => block scoped but fix value
const e = [6,7,8,9]
//!"[6,7,8,9]" => !false => true => 1
    if (!!e < 2) {
        e[2] = 5;
        console.log(e);
        
    }
    console.log(e);
    
     
const home = {
    size : "big",
}
    home.size = "small"
    console.log(home.size);

const home2 = home
home2.size = "large"
console.log(home2.size);
console.log(home.size);
console.log("--------------- end of const---------------");



    