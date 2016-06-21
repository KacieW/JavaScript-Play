/*Question: How would you verify a prime number? Return false if it is not a prime number.*/

function isPrime(n) {
  if (n == null || n == 0 ||(typeof n ==="string")) {
    return alert(false);
  }
  if (n == 2 || n == 3 || n == 5 || n == 7) {
    return alert(true);
  }
  if (n % 2 != 0 && n % 3 != 0 && n % 5 != 0 && n % 7 != 0) {
    return alert(true);
  } else {
    return alert(false);
  }
}
isPrime("5");

