var myModule = {

    fname: "sandeep",
    lname: "ghimire",
    hobby: "computer programming",

     work : function () {
        console.log("my name is " + " "+ this.fname + " " + this.lname + " and my hobbies are " + this.hobby);
    }


};


 //  undefined
console.log(myModule.fname);
myModule.lname;
console.log(myModule.hobby); // Cracking Jokes and writing Phils-osophy
myModule.work(); // Phil Dunphy  is a Realtor and his hobby is Cracking Jokes and writing Phils-osophy

