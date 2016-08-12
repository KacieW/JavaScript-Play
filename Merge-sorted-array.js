//How would you merge two sorted array?

//a = [1,3,3,4,7],b = [1,2,5,5,7,9]

function mergeSort(a, b){
  var mergeRes = a.concat(b);
  mergeRes.sort(function(c,d){return c-d;});
  
  return mergeRes;
}

console.log(mergeSort([1,3,3,4,7],  [1,2,5,5,7,9]));
