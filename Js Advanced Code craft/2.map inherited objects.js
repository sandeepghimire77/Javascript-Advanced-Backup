/**
 * Created by Akshar on 5/11/2017.
 */

var base = { a:1, b:2};
var obj = Object.create(base);
// obj['c'] = 3;
for ( pro in obj)
 console.log(pro)
