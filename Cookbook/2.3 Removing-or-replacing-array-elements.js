
var animals = ["dog", "cat", "seal", "lion", "cat", "fish"];
var str = "cat";
//to replace
animals = animals.map(function(x, index, array){
	if(x==str){
		return x="CAT";
	}else{
		return x;
	}
});
//to remove
/*
while(animals.indexOf(str)>0){
animals.splice(animals.indexOf(str), 1);
}*/
console.log(animals);
