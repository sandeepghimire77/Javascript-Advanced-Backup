/**
 * Created by Akshar on 6/17/2017.
 */
/* This issue of no block level scope has plagued JavaScript developers since its inception.
 One common workaround in the past has been to use something called an Immediately Invoked
 Function Expression (IIFE) like so: */

function hello() {
    var x = "function ";

    for (i=0; i<5 ; i++) {
        (function() {
            var x = "value";
        })();

    }
    console.log(x);

}
hello();
// this dont print value inside of the for loop coz this is what self invoking function does in javascript.

