/**
 * Created by Akshar on 7/7/2017.
 */
var c=1;
var myFun = function (){
    var a = 5;
    var yourFun = function(){
        var b = 10;
        console.log('In Inner function : a =' + a + ' and b = ' + b + 'c is :' +c);
    }

    return yourFun();

}

myFun();







