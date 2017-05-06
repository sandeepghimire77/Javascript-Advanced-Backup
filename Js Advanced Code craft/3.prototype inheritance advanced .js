/**
 * Created by Akshar on 5/4/2017.
 */
// base class
 var Job = function() {
    this.pays = true;
};
//bass class prototype method
Job.prototype.print = function() {
    console.log(this.pays ? 'please hire me' : 'no thank you ');

};

// sub class
var Techjob = function(title,pays) {
    Job.call(this);
    this.title = title;
    this.pays = pays;

};

Techjob.prototype = Object.create(Job.prototype); // what this line is saying is that i want to inherit from Job.prototype
Techjob.prototype.constructor=Techjob; //just setting the constructor for the Techjob

var Softwareposition = new Techjob("javascript programmer ", true); // object inherit from the Techjob sub class

var Softwareposition2 = new Techjob("vb net programmer" , false);

console.log(Softwareposition.print());
console.log(Softwareposition2.print());




