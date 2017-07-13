

/**
 * Created by Akshar on 7/11/2017.
 */
class Person {
   private  firstname = " ";
   private  lastname = " ";

    constructor(firstname,lastname) {
        this.firstname= firstname;
        this.lastname=lastname;
    }
    whoareyou() {
        return `hi i am  ${this.firstname}  ${this.lastname}`;

     }
}
class Student extends Person {
    course = " ";
    constructor(firstname,lastname,course) {
        super (firstname, lastname);
        this.course = course;
    }
    whoareyou() {
        return `hi i am  ${this.firstname}  ${this.lastname} and my course is ${this.course}`;
    }
}

var student1 = new Student("sandeep","Ghimire","Javascript");
console.log(student1.whoareyou());



