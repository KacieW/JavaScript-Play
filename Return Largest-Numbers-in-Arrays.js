//Return Largest Numbers in Arrays

Array.prototype.max = function(){
  return Math.max.apply(null, this);
};

function largestOfFour(arr) {
  // You can do this!
  var myArr=[];
  for(var i=0; i<arr.length;i++){
    myArr.push(arr[i].max());
  }
  return myArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//result: [5, 27, 39, 1001]
