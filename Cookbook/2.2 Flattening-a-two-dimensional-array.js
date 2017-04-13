var arr=[['starwberry', 'blueberry'], ["lime", "peach", "pairs"], ["apple"]];
/*
var newarr="";
for(var i=0; i<arr.length; i++){
	newarr = newarr.concat(arr[i], ",");
}
console.log(newarr);
*/

//better way

var newarr = arr.concat.apply([], arr);
console.log(newarr);
