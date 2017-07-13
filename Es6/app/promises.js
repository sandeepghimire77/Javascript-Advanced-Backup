/**
 * Created by Akshar on 7/10/2017.
 */
// think a promise like your girlfriend make promise to meet you today .she either meets you or else she dont .. thats it ....
//https://davidwalsh.name/promises

/* promise example */

var calculationadd = new Promise(function(resolve,reject) { // a way to define the promise

    var x =9;
    var y=9;
    var c=x+y;
    if(x,y) {
        resolve(c);
    }
    else {
        reject('please enter the required number');
    }

});
// yo .then pachiko function vaneko callback function ko calculation ho ho.
calculationadd.then(function(fromresolve){
    console.log("the addition of two number is " + fromresolve);
}).catch(function(fromreject) {
    console.log("the number is not there . Please enter the number ");
});