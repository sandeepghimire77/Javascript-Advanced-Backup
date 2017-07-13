/**
 * Created by Akshar on 7/1/2017.
 */
// if we had to do in the case of inherited objects then we do in es5 as below . here .
// there is a pitfall when we do for the inherited objects .
// Looping over objects with for-in also iterated over the inherited properties as well as the objects
//own properties, like so:
let father = {
    name: "Gajaraj Ghimire",
    age: 62
};
let son = Object.create(father);
son.sonname = "sandeep Ghimire";
// yesma problem samya parna hamile hasownproperty vanne method ni banauna sakchau ..example...
for(prop in son) {
    if(son.hasOwnProperty(prop)) {
        console.log(prop);
    }
}




let map = new Map([
    ["A",1],
    ["B",2],
    ["C",3]
]);

console.log(map.get("A"));
console.log(map.get("B"));
console.log(map.get("C"));
// has is used to check if the key is present or not
console.log(map.has("D"));
//to delete the key
//console.log(map.delete("A"));
console.log(map.has("A"));
//console.log(map.clear);
console.log(map.has("B"));

for (let key of map.keys()) {
    console.log(key);
}








