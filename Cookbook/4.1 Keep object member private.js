function A(name){
	var functionName = "niMei";//private number, do not use THIS keyword with this member.
	this.privateName = function(){
		return name+" "+functionName;
	};
}
var a = new A("aa");

a.functionName = "hehe";//can be overwrite easily.
console.log(a.functionName);

console.log(a.privateName());
