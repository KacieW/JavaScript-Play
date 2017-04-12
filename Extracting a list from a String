//Extracting a list from a String, from Javascript cookbook

var str = "This is a list. This is a list of items: apply, cherry, lime, orange. This is a list.";

var start = str.indexOf(":");
var end = str.indexOf(".", start+1);

var newStr = str.slice(start+1, end).split(",");

var result = newStr.map(function(x){return x.trim();})
console.log(result);
