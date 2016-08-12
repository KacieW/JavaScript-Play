//How would you find the greatest common divisor of two numbers?

function GCD(a, b){
  var temp = a<b?a:b;
  var myArr=[1];
  for(var i =2; i<=temp; i++){
    if(a%i==0&&b%i==0){
      myArr.push(i);
    }
  }
  return myArr[myArr.length-1];
}
console.log(GCD(7,42));
