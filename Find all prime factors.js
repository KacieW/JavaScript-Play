//How could you find all prime factors of a number?
//Better version

function isPrimeFactor(n) {
  var myArr = [1];
  var counter = 0;
  var divisor = 2;
  if(n===0||n==null){return console.log("Wrong number.")};
  if (n == 2 || n == 3) {
    return console.log("prime factor is " + n/n+", "+n);
  } else if (n % 2 !== 0 && n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0) {
    return console.log("prime factor is " + n/n+", "+n);
  } else {
    while (n >= divisor) {
      while (n % divisor === 0) {
        n = n / divisor;
        myArr.push(divisor);
      }
      divisor++;
    }
    return console.log("prime factors are " + myArr.join(","));
  }

}
isPrimeFactor();

