/**
 * Created by Akshar on 7/13/2017.
 */
function Greet(Greeting) {
    this.Greeting = Greeting;
}
Greet.prototype.sayhello= function() {
    return this.Greeting + " "+"sandeep";
}

var x = new Greet("hello");

let button = document.createElement("button");
button.textContent = "sayHello";

button.onclick = function () {
    alert(x.sayhello());
};
document.body.appendChild(button);
