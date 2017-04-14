var arr = ["a", "aa", "bb", "ab", "d"];
//forEach change the original arr
arr.forEach(function(item, index, arr){
	if(item=="aa"){
		arr[index] = "7";
	}
});

//apply the change to a new array.
var newArr = arr.map(function(x){if(x=="aa"){return "7";}else{return x;}});
console.log(newArr);
