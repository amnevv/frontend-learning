var a = 1;
var b = "Ma-i"; // string
var c = 23; // number
var d = true; // boolean
var e; // undefined
var f = null; // null

console.log(a, b, c, d, e, f);

// Object
const home = {
    address: "50 Thailand",
    color: "white",
    member: "4 persons & 1 dog",
    details: function() {
        console.log
        ("Adress is " +  this.address + " " + "color is " + this.color + " member are " + this.member);
    } // we call this method :)

}

home.details(); // invoking the method
home.details();

home.color = "Yellow"; // change value of property
home.details = function (){
    console.log("color is " + this.color);
} // change method logic
home.details();
console.log(home);
home.doorcolor = "brown"; // add property on the fly
home.name = "anmevv";
console.log(home);

