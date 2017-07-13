

/**
 * Created by Akshar on 7/11/2017.
 */
interface Human {
    firstName: string;
    lastName: string;
    whoareyou: Function;
    symbol_number(number): Function;
}
class Person {


    constructor(public firstname, public lastname) {
        this.firstname= firstname;
        this.lastname=lastname;
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
    symbolnumber(number) {
        return `my symbol number is ${number}`;
    }


}

var student1 = new Student("sandeep","Ghimire","Javascript");
console.log(student1.whoareyou());
console.log(student1.symbolnumber(927901));



