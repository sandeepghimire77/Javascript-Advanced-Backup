/**
 * Created by Akshar on 5/3/2017.
 */

function Person( firstname, lastname,sex) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.sex = sex;
    this.name = function() { // this is called adding the methods to the prototype
        return this.firstname + " " + this.lastname;
    }
}
Person.prototype.nationality = "English"; // adding the properties using the prototype

var Myfather = new Person("Gajaraj", "Ghimire", "male");
var Mymother = new Person("Archana","Ghimire","female");
console.log("The name of my father is  " + Myfather.name() );
console.log("my father nationality is " + Myfather.nationality);
