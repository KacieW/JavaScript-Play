//How could you find all prime factors of a number?
//first version

function isPrimeFactor(n) {
  var myArr = [];
  var counter = 0;
  if (n == 2 || n == 3) {
    return console.log("prime factor is " + n);
  } else if (n % 2 != 0 && n % 3 !=0 && n % 5 != 0 && n % 7 != 0) {
    return console.log("prime factor is " + n);
  } else {
    while (n>=2&&n % 2 == 0) {
      n = n / 2;
      counter++;
    }
    myArr=Array(counter).fill(2);
    console.log(counter);
    while(n>=3&&n%3==0){
      n=n/3;
      myArr.push(3);
    }
    while(n>=5&&n%5==0){
      n=n/5;
      myArr.push(5);
    }
    while(n>=7&&n%7==0){
      n=n/7;
      myArr.push(7);
    }
  }
  return console.log("prime factors are " +myArr.join(","));
}
isPrimeFactor(63);
