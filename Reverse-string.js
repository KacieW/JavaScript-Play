 // How would you reverse a string in JavaScript?
 
 function reverseStr(s){
   var resArr =[];
   var myArr = s.split("");
   var temp = myArr.length;
   for(var i=0; i<temp; i++){
     resArr.push(myArr.pop());
   }
   var res = resArr.join('');
   return res;
 }
 console.log(reverseStr("Hello me"));
