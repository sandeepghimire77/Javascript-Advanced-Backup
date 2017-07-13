/**
 * Created by Akshar on 6/29/2017.
 */

let nepali = function(myname) {
    this.myname = myname;
    this.sex = "male"; // yo sex is a default value
    this.hellomessage = function() {
        console.log("Hello here you get the information of me : ");
    }


};
nepali.prototype.print = function() {
    console.log(" my name is : " + this.myname);
}
nepali.prototype.age = 26;



let kielname = new nepali("sandeep Ghimire");
let kathmanduname= new nepali("sandesh Ghimire ");
console.log(kielname.hellomessage());
console.log(kielname.print());
console.log(kielname.age);
console.log(kielname.sex);
console.log(kathmanduname.print());

console.log("this is end of program 1 ");

/* now we create program 2 with base class and sub class constructer prototype inheritence */

var job = function() {
    this.pays = true;
};

 job.prototype.print = function() {
    console.log(this.pays ? 'please hire me ': 'no dont hire me ');
}

// creating sub classes
var techjob = function(title,pays) {
    job.call(this);
    this.title=title;

    this.pays = pays;
};
techjob.prototype= Object.create(job.prototype);
techjob.prototype.constructor = techjob;
techjob.prototype.print = function() {
    console.log(this.pays ? this.title + ' job is great please hire me ': 'no dont hire me because '+' ' + this.title + ' ' +'job i dont know' );
}

Object.prototype.printfrommasterobject = function() {
    console.log("I am executing from the master object ");
}


var softwareposition = new techjob("software enginner ",true);
console.log(softwareposition.print());
console.log(softwareposition.printfrommasterobject());

// what happens here is that the object softwareposition will first look into the its own , then its move to the prototype chain
// up and look into the tech job. then it dont find that then it look into the main object job


function human(x,y,z,i){
    return{
        name: x,
        age: y,
        quote: z,
        salary: function(i){ return i+2500; }
    }
};
var zini = new human('Zenidan','41','I am Zidane',7500);
console.log(zini.name + zini.age + zini.quote + zini.salary());











