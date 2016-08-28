//Find whether a string contains a contiguous palindromic substring in O(n) time.

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


//checks whether any permutation of an input string is a palindrome.

function isPalindrome(str){
  var mySet = new Set();
  
  for(var i=0; i<str.length; i++){
    var tempLetter = str[i];
   // console.log(mySet.has(tempLetter));
    if(mySet.has(tempLetter)){
      mySet.delete(tempLetter);
    }else{
      mySet.add(tempLetter);
    }
  }
  if(mySet.size<=1){
    return true;
  }else{return false;}
  
}

//str="civvic";
//isPalindrome(str);
//console.log(isPalindrome("civic"));
//console.log(isPalindrome("ivicc")); 
//console.log(isPalindrome("civil")); 
console.log(isPalindrome("livcivc")); 


function isPalindrome(str){
  if(str.length==1){
	  return 'is Palindrome';
	}
	var temp = str.split('');
	var l = temp.length;
	var mid = Math.floor(l/2);
	for(var i=0; i<mid; i++){
		if(temp[i] !== temp[l-1-i]){
		   console.log(temp[i]);
			 console.log(temp[l-1-i]);
       return 'no a P';
		}
  }		
	return 'is P';
}
