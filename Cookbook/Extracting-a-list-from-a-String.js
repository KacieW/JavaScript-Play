//Extracting a list from a String, from Javascript cookbook

//Step 1, find the string and extract it from the original string
//Step 2, turning the string into an array and trim the spaces.

var str = "This is a list. This is a list of items: apply, cherry, lime, orange. This is a list.";

var start = str.indexOf(":");
var end = str.indexOf(".", start+1);

var newStr = str.slice(start+1, end).split(",");

var result = newStr.map(function(x){return x.trim();})
console.log(result);


