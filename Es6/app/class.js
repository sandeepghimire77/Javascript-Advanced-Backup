var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    function Person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(firstname, lastname, course) {
        var _this = _super.call(this, firstname, lastname) || this;
        _this.course = " ";
        _this.course = course;
        return _this;
    }
    Student.prototype.whoareyou = function () {
        return "hi i am  " + this.firstname + "  " + this.lastname + " and my course is " + this.course;
    };
    Student.prototype.symbolnumber = function (number) {
        return "my symbol number is " + number;
    };
    return Student;
}(Person));
var student1 = new Student("sandeep", "Ghimire", "Javascript");
console.log(student1.whoareyou());
console.log(student1.symbolnumber(927901));
