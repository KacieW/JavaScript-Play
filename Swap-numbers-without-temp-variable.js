
function swap(a, b){
  a = a+b;
  b = a-b;
  a = a-b;
  return a+", "+b;
}
console.log(swap(2, 7));

//smart way
function swap(a, b){
  a = a^b;
  b = a^b;
  a = a^b;
  return a+", "+b;
}
console.log(swap(2, 7));
