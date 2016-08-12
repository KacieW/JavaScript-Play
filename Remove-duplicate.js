//How would you remove duplicate members from an array?

//[1,3,1,1,5,7,5]

function sortArr(arr) {
  var result=[];
  var sortedArr = arr.sort(function(a, b) {
    return a - b;
  });

  console.log(sortedArr);
  for(var i=0; i<sortedArr.length; i++){
    if(sortedArr[i]!=sortedArr[i+1]){
       result.push(sortedArr[i]);
    }
  }
  return result;
}

console.log(sortArr([1,3,1,1,2,5,3,7]));
