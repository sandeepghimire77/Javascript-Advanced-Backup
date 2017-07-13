/**
 * Created by Akshar on 7/8/2017.
 */

var myModule = ( function(){

    var fname = "Phil";
    var lname = "Dunphy";
    var hobby = "Cracking Jokes and writing Phils-osophy";

    var work = function() {
        console.log( fname + "  " + lname + "is a Realtor and his hobby is " + hobby);
    }

    return {

        "hobby": hobby,
        "work": work
    }

})();

console.log(myModule.fname); //  //undefined
console.log(myModule.lname); //  undefined
myModule.hobby; // Cracking Jokes and writing Phils-osophy
myModule.work(); // Phil Dunphy  is a Realtor and his hobby is Cracking Jokes and writing Phils-osophy

