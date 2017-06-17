/**
 * Created by Akshar on 6/17/2017.
 */
function hello() {
    var x = "function ";

    for (i=0; i<5 ; i++) {
        var x= "value";

    }
    console.log(x);

}
hello();
// here we expect to print the function but instead we print value coz value inside the for loop is in block level scope .
//since javascript dont allow this block level scope. it assumes that the var x inside block level scope is a global variable .
// so instead of executing it outside the block level scope also get value of x as value since global
// variable value override the function level scope value function
