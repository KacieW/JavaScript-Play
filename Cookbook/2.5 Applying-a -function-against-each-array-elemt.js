var arr = ["a", "aa", "bb", "ab", "d"];

arr.forEach(function(item, index, arr){
	if(item=="aa"){
		arr[index] = "7";
	}
});
console.log(arr);
