//How would you merge two sorted array?

//a = [1,3,3,4,7],b = [1,2,5,5,7,9]

function mergeSort(a, b){
  var mergeRes = a.concat(b);
  mergeRes.sort(function(c,d){return c-d;});
  
  return mergeRes;
}

console.log(mergeSort([1,3,3,4,7],  [1,2,5,5,7,9]));

function mergeTwo(arr1, arr2){
  var res = [];
	while(arr1.length>0 && arr2.length>0){
		if(arr1[0]<arr2[0]){
			res.push(arr1.shift());
		}
		if(arr1[0]>arr2[0]){
			res.push(arr2.shift());
		}
		if(arr1[0]==arr2[0]){
			res.push(arr1.shift());
			res.push(arr2.shift());
		}
	}
	
	if(arr1.length==0){
		res = res.concat(arr2);

	}else{
		res = res.concat(arr1);
	}
	return res;
}

var arr1 = [1,2,5,7,7,9];
var arr2 = [1,90];
document.getElementById('d').innerHTML = mergeTwo(arr1, arr2);
