/**
 * Created by Akshar on 7/3/2017.
 */

function father() {
    var fname = "Gajaraj";

    var son = () => {
        console.log(fname);
    }
    return son;


}
let sonreviel = father();
sonreviel();

let add = function(x) {
    function add2(y) {
        return x+y;
    }
 return add2;

}
let x = add(2);
let y= x(3);
console.log(y);

