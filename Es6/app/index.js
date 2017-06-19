let v = ["sandeep", "Aishu", "sandesh"];
let q = ["Gajaraj ", "Archana", ...v, "anu"];
console.log(q);
// example of spread operater
// now example of rest parameter
function child(...a) {
    console.log(a);

}
child("sandeep","aishu","anu");



/* the use of Object destructuring */
let father = {
    name: "Gajaraj",
    age: 62
};

let {name, age} = father;
console.log(name,age);

//next examples
const obj = {first: "sandeep", age: 25};
const {first: f, age: a} = obj;
console.log(f);
console.log(a);

// example of the .map method on an array
// concept of arrow function 2.
// and also the concept of callback out here

let array = [10,20,30];

let array2 = (n) => {
    return n*2;

}
let array3= array.map(array2);
console.log(array3);










