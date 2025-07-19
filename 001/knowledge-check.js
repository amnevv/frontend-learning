// Create Car Object
// Have brand, model, color, plate properties
// Have method to start, drive, break
// When method invoked must print something like "The car is moving."
const car = {
    brand: "BENZ",
    model: "C43 AMG",
    color: "silver",
    plate: "AB 99",
    start: function() {
        console.log("Start" + this.brand + "by push the button");
    },
    drive: function() {
        console.log("I love to drive" + this.brand + this.model + this.color);        
    },
    break: function() {
        console.log("If I did not break, the car would hit my cat");
    }
}
car.start();
car.drive();
car.break();

car.color = "gray"
car.drive();
console.log(car["brand"]);
var p = "plate";
console.log(car[p]);
console.log(car.brand);


