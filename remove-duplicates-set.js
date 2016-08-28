//How would you remove duplicate members from an array?

function noDuplicate(arr){
  var mySet = new Set();
	for(var i=0; i<arr.length; i++){
	  if(mySet.has(arr[i])==false){
		  mySet.add(arr[i]);
		}
	}
  return [...mySet];
}

var test = [1,4,3,7,2,7,2,9];
document.getElementById('d').innerHTML = noDuplicate(test);
