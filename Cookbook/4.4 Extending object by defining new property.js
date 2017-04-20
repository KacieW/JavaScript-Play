
var myObject ={};

myObject.name = "new name.";
console.log(myObject.name);

//more control on object
Object.defineProperty(myObject, 'age', {value:5, enumerable:true});
console.log(myObject.age);
myObject.age =10;
console.log("After changing, age is still "+myObject.age);

Object.defineProperty(myObject, 'NewAge', {value:10, enumerable:true, writable:true});
console.log("One more time, new age is "+myObject.NewAge);
myObject.NewAge = 15;
console.log("final change "+myObject.NewAge);
