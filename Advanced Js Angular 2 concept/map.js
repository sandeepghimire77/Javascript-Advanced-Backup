/**
 * Created by Akshar on 6/14/2017.
 */
// this is a simple illustration of Array.map

var incrementby1 = function(element) {
    return element+1;
}
Myarray = [1,2,3,4];
var x = Myarray.map(incrementby1);

console.log(x);
