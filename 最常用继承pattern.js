
function Dog(){
	this.wow = function(){
		console.log("dog wow");
	};
	this.yelp = function(){
		this.wow();
	}
}
//Maddog先建立一个constructor，再继承Dog
function Maddog(){
	var counter = 0;
	Dog.call(this);//constructor stealing
	this.yelp = function(){ //重新定义yelp这个方法
		var that=this;
		var t = setInterval(function(){
			that.wow();//调用Dog里面的wow方法
			counter++;
			if(counter==3){
				clearInterval(t);
			}
		}, 1000);
	}
}
Maddog.prototype = new Dog(); //prototype继承

var myDog = new Dog();
myDog.yelp();
var madDog = new Maddog();
madDog.yelp();
