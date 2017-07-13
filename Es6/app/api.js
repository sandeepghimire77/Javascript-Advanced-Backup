/**
 * Created by Akshar on 7/10/2017.
 */
/* const root = "https://exampleapi/posts/1";


fetch (root, { method: "GET"})

.then (function response() {
    console.log(response);
}); */
var myImage = document.querySelector('img');

fetch('flowers.JPG').then(function(response) {
    return response.blob();
}).then(function(myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
});
// for webApi , fetch and http just look this site
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

