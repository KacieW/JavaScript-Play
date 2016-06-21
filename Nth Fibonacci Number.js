
//How do get nth Fibonacci number?

function Fib(n){
  if(n<=1){
    return n
  }
  return Fib(n-1)+Fib(n-2);
}
