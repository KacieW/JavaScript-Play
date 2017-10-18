# Find the largest product
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product. 在给定数组内找到相邻
两个乘积最大的数，返回最大乘积。

## Round 1
把相邻两个数的乘积放到另一个数组中（`newArr`），然后在`newArr`中找到最大值。用`Math.max.apply()`来实现。

```javascript
function adjacentElementsProduct(inputArray) {
  var newArr = [];
  for(var i=0;i<inputArray.length-1; i++){
    newArr.push(inputArray[i]*inputArray[i+1]);
  }
  var maxOne = Math.max.apply(null, newArr);
  return maxOne;
}
```
