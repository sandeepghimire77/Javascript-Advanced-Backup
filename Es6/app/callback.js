/**
 * Created by Akshar on 7/10/2017.
 */

function add(x,y) {
    var c= x+y;
    console.log(c);
}

function multiply(a,b,add) {
    var d = a*b;
    console.log(d);
    add(2,2);

}

var z = multiply(2,3,add);
//in nepali langiage .
// callback ko concept vaneko chai tei ho..esma hamile mathi add vanne function ma long running task halchau .
// ra yo long running task ma hame kunai eeuta program garchau . ra tyo program lai tala hamile aarko function multiply
//vane ma hami teslai parameter pass garchau . ra hami kaam garchau ..ra last ma tyo add(2,2) vanne long running task
//lai hami pachi call back garchau it means hami teslai call garchau aarko function ma . eg eesma
// hamile add(2,2) vanera call haneka chau .
// yo callback teti saro important kura chai hoina ...yeslai hami es6 ma promises use garera kaam garna sakchau .


