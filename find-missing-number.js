//from a unsorted array of numbers 1 to 100 excluding one number, find the number

function sum(num){
  var n = num.length+1;
  var expect =  n*( n+1)/2;
  var submit =0;
  for(var i=0; i<num.length; i++){
    submit += num[i];
  }
  return expect-submit;
}
sum([1,2,3,5]);
