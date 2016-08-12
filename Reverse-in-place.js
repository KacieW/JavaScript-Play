//If you have a string like "I am the good boy". How can you generate "I ma eht doog yob"?

function reverseWord(word){
  if(word===""){
  return word;
  }else{
    return reverseWord(word.substr(1))+word.charAt(0);
  }
}
//console.log(reverseWord("Hello"));

function reverseInPlace(sentence){
  var myarr = sentence.split(" ");
  var resArr=[];
  for(var i=0; i<myarr.length; i++){
    resArr[i] = reverseWord(myarr[i]);
  }
  var resStr = resArr.join(' ');
  return resStr;
}

console.log(reverseInPlace("I am the good boy"));
