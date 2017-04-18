var arr=["a", "ab", "cd", "ba", "a"];
var temp=[];
function reverseMe(arr){
 if(arr.length>1){
	temp.push(arr.pop());
	reverseMe(arr);
  //arguments.callee(arr); work as well
	}else{
	temp.push(arr[0]);
	}
	return temp;
}

var a = reverseMe(arr);
console.log(a);
