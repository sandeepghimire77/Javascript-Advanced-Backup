/**
 * Created by Akshar on 5/2/2017.
 */

var obj = { num :1};

var addtothis = function (a) {
    return this.num + a;
};

console.log(addtothis.call(obj,2));// call ko example ho


var objec =  { nume : 2};
var multiplytothis = function (a,b,c) {
    return this.nume + a + b + c;
};

var arr= [1,2,3];

console.log(multiplytothis.apply(objec, arr)); //apply example here


