/**
 * Created by Akshar on 7/1/2017.
 */


// TODO
// * add a 'color' field to the prototype
Vehicle.prototype.color = function(color) {
  this.color = color;
}
// * add a 'bio' method that *returns*:
Vehicle.prototype.bio = function() {
    console.log(this.color + " " + this.make + " " + this.year);
}
//      A ${this.color} ${this.make} made in ${this.year}.

function Vehicle(make, year) {
    this.make = make;
    this.year = year;
}

let s = new Vehicle("Tesla", 2017);
s.color = "black";
console.log(s.bio());

/* this upper method is also correct or the below two methods are also correct */

function Vehiclee(make, year) {
    this.make = make;
    this.year = year;
}
Vehiclee.prototype.color;
Vehicle.prototype.bio = function() {
    return `A ${this.color} ${this.make} made in ${this.year}.`;
};
let s = new Vehiclee("Tesla", 2017);
s.color = "black";
