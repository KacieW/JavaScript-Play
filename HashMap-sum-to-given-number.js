var A = [6,4,5,7,9,1,2];
var map = new Map();
for(var i=0; i<A.length-1;i++){
  map.set(A[i], i);
}
//var sum = 10;
for(var j=0;j<A.length-1; j++){
//  console.log('---'+A[j]);
  var t = 10-A[j];
   if(map.has(t)&& map.get(t)!=j){
     console.log(A[j]+'--'+t);
     map.delete(A[j]);
   }
}
