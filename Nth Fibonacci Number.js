
//How do get nth Fibonacci number?

function Fib(n){
  if(n<=1){
    return n
  }
  return Fib(n-1)+Fib(n-2);
}

/* better time complexy
function fibo(n){
  var fiboArr = [0,1];
  if(n<=1){
    return console.log(1);
  }else{
    for(var i=2; i<=n;i++){
      fiboArr[i] = fiboArr[i-1]+fiboArr[i-2];
    }
    return console.log(fiboArr[n]);
  }
  
}
fibo(6);
*/
