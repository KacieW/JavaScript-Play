
//Find the Longest Word in a String

Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

function findLongestWord(str) {
  var myArr = str.split(" ");
  var lengArr=[];
  for(var i=0; i< myArr.length; i++){
    lengArr.push(myArr[i].length);
  }
  return lengArr.max();
}

findLongestWord("The quick brown fox jumped over the lazy dog");
