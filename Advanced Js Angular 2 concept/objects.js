/**
 * Created by Akshar on 6/14/2017.
 */
var father = {
    firstname: "Gajaraj",
    lastname: "Ghimire",
    sex: "male",
    rollname: 21,
    name: function(){
        return this.firstname + " " + this.lastname;
    }

};

var son = {
    firstname: "sandeep",
    lastname: "Ghimire",
    sex: "male",
    rollname: 22,
    name: function(){
        return this.firstname + " " + this.lastname;
    }

};
console.log(father.firstname);
console.log(father["rollname"]);
console.log(father.name());
