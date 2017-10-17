# Find first duplicated number in an array
challenge from CodeFight.

Write a solution with O(n) time complexity and O(1) additional space complexity, to finde the first duplicated number in array.
例如 ```arr = [3,6,6,6,7,3,1,3,2]```,输出应该是6。因为6是第一个出现重复的数字。如果一个没找到，返回-1.

## Round 1
建一个新的空数组`tempArr`，把给定数组中的数字分别跟`tempArr`中的对比，如果`tempArr`中没有这个数字，则把这个数字放到`tempArr`中。
如果有，则返回该数字，表示已经找到第一个重复的数字。如果没有一个一样的数字，则返回-1.
```javascript
function firstDuplicate(arr) {
  var tempArr =[];
  for(var i=0; i<arr.length;i++){
      if(tempArr.indexOf(arr[i])==-1){
          tempArr.push(arr[i]);
      }else{
          return arr[i];
      }
  }
  return -1;
}
```
It solve the problem, but it takes a while which makes the computer not happy:(

## Round 2
Use Hashmap.

The `Map` object holds key-value pairs. 加快查找速度. We create a `map` object, if the map contains/has(`map.has()`) this value, just return the value. 
If we couldnt find it in map, we should set a key-value pairs(`map.set(key, value)`) for next round reference.
```javascript
function firstDuplicate(arr) {
  var map = new Map();
  for(var i=0; i<arr.length;i++){
      if(map.has(arr[i])){
          return arr[i];
      }else{
          map.set(arr[i], i);
      }      
  }
  return -1;
}
```
