/**
 * Created by Akshar on 7/9/2017.
 */
function change(A) {
    var o = ' ';
    for (var i = A.length - 1; i >= 0; i--)
        o = o+ A[i];
   return o;
}

var x = change("sand");
console.log(x);

