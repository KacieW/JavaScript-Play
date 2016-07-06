//Remove all falsy values from an array.
//tricky is how to find the NaN element without affect the string.

function bouncer(arr) {
  var newArr=[];
  function filtArr(x){
    if(x!==null && x!==0 && x!=="" && x!==false && x!== undefined && 
       !(isNaN(x) && (typeof x==='number'))){
      return newArr.push(x);
    }
  }
  var temp = arr.filter(filtArr);
  console.log(temp);
  return temp;
}

bouncer([7, "ate", "", false, 9]);
