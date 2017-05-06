/**
 * Created by Akshar on 5/3/2017.
 */

var x = function(j,k) {
    this.i =0;
    this.j=j;


    };
    x.prototype.getj = function() {
        return this.j;
    };


var x1 = new x(1);
var x2 = new x(2);
console.log("the value of x1 object of j is :" + x1.getj());
console.log("the value of x2 object of j is : " + x2.getj());


