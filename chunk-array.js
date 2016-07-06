
/*Write a function that splits an array (first argument) 
into groups the length of size (second argument) and returns them as a two-dimensional array.*/

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var myArr = [];
  var leng=arr.length;
  for(var i=0; i<leng; i+=size){
    myArr.push(arr.slice(i, size+i));
  }
  return myArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
