//turn nodelist to array
var divs = document.getElementsByTagName("div");
var meme = Array.prototype.slice.call(divs);
console.log(meme[0].textContent);
