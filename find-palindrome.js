//check if a word is palindrome
function palindrome(str){
  var strLeng = str.length;
  for(var i=0; i<strLeng/2; i++){
    if(str[i]!==str[strLeng-1-i]){
      return false;
    }
    
  }
  return true;
}

var result = document.getElementById("result");
result.innerHTML = palindrome("abimba");
