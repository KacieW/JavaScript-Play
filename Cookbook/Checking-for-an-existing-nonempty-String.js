//1.3 Checking for an existing , nonempty String

//a variable is defined, is a string, and is not empty
var verifyMe="asdfasdf";

if((typeof verifyMe)==="string"&&verifyMe.length>0){
//length can't check if the str is set ot not, or it will give an error when it is not set yet. So comes the //typeof to check the existance. 
	console.log("it is an existing, non empty string");
}else{
	console.log("verify again");
}
