//checks whether any permutation of an input string is a palindrome

function isPalindrome(str){
  var isPalind;
  var arr = str.split('');
  var tempArr =[];
  
  if(arr[0]!==arr[1]){
    tempArr.push(arr[0]);
    tempArr.push(arr[1]);
    //console.log(tempArr);
  }else{return true;}
 //onsole.log(tempArr);
  for(var i=2; i<arr.length; i++){
    if(tempArr[tempArr.length-1]!==arr[i]&&tempArr[tempArr.length-2]!==arr[i]){
      tempArr.push(arr[i]);
      console.log(tempArr);
    }
    if(tempArr[tempArr.length-1]==arr[i]){
      tempArr.pop();
    }
    if(tempArr[tempArr.length-1] !==arr[i] && tempArr[tempArr.length-2]==arr[i]){
      tempArr.pop();
      tempArr.pop();
    }
    
  }
  if(tempArr.length==0){
      return true;
    }else{return false;}
  
}
